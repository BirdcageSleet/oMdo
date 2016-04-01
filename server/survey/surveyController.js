
var User = require('../db/models/userSchema.js');
var Survey = require('../db/models/surveySchema.js');
var Keyword = require('../db/models/keywordSchema.js');
var Score = require('../db/models/scoreSchema.js');
var jwt = require('jwt-simple');
var Q = require('q');
var mongoose = require('mongoose');
var dotenv = require('dotenv').config();
var AlchemyAPI = require('../alchemyapi');
var alchemyapi = new AlchemyAPI();
var _ = require('underscore');



module.exports = {
  postAlchemyResults: function(req, res, next) {
    var output = {};

    function moodSentiment(req, res, output){
      alchemyapi.sentiment('text', req.body.moodElaborate, {}, function(response){
        output['moodSentiments'] = response;
        moodKeywords(req, res, output)
      });
    }

    function moodKeywords(req, res, output){
      alchemyapi.keywords('text', req.body.moodElaborate, { 'sentiment':1 }, function(response){
        output['moodKeywords'] = response;
        sleepSentiment(req, res, output);
      });
    }

    function sleepSentiment(req, res, output){
      alchemyapi.sentiment('text', req.body.sleepElaborate, {}, function(response){
        output['sleepSentiments'] = response;
        sleepKeywords(req, res, output)
      });
    }

    function sleepKeywords(req, res, output){
      alchemyapi.keywords('text', req.body.sleepElaborate, { 'sentiment':1 }, function(response){
        output['sleepKeywords'] = response;
        eventSentiment(req, res, output);
      });
    }

    function eventSentiment(req, res, output){
      alchemyapi.sentiment('text', req.body.eventElaborate, {}, function(response){
        output['eventSentiments'] = response;
        eventKeywords(req, res, output)
      });
    }

    function eventKeywords(req, res, output){
      alchemyapi.keywords('text', req.body.eventElaborate, { 'sentiment':1 }, function(response){
        output['eventKeywords'] = response;
        req.body.output = JSON.stringify(output);
        next();
      });
    }

    moodSentiment(req, res, output)
  },

  postUserSurvey: function(req,res,next) {
    var token = req.headers['x-access-token'];
    var create = Q.nbind(Keyword.create, Keyword);
    var createScore = Q.nbind(Score.create, Score);
    if (!token) {
      next(new Error('Token not found while trying to post to survey'));
      }
    var survey = req.body.survey;
    var user = jwt.decode(token, process.env.JWT_SECRET);
    User.findOne({username: user.username})
      .exec(function(err, foundUser) {
        if (err) {
          next(new Error('Could not find user when attempting to post survey:', err));
        }
        Survey.create(req.body, function(err, survey) {
          if (err) {
            next(new Error('There is an error in posting the survey: ', err));
          }

          var parsed = JSON.parse(req.body.output);
          var keywords = {'Event': parsed.eventKeywords.keywords, 'Sleep': parsed.sleepKeywords.keywords, 'Mood': parsed.moodKeywords.keywords};
          var sentiments = {'Event': parsed.eventSentiments, 'Sleep': parsed.sleepSentiments, 'Mood': parsed.moodSentiments};


          _.each(keywords, function(keywordArray, key){
            keywordArray.forEach(function (aKeyword) {
              Keyword.findOne({keyword: aKeyword.text, field: key})
              .then(function (foundKeyword) {
                var score = aKeyword.sentiment.score.slice();
                if (!foundKeyword) {
                  newKeyword = {
                    keyword: aKeyword.text,
                    userScores: [0],
                    docScores: [sentiments[key].docSentiment.score],
                    oMdoScores: [aKeyword.sentiment.score],
                    relevance: [aKeyword.relevance],
                    field: key,
                    surveyDate: new Date(),
                    user: foundUser
                  }
                  return create(newKeyword)
                } else {
                  Keyword.findOneAndUpdate({keyword: aKeyword.text, field: key},
                    {'$push' : {oMdoScores: aKeyword.sentiment.score, docScores: sentiments[key].docSentiment.score, relevance: aKeyword.relevance}},
                    {safe: true, upsert: true},
                    function (err, model) {
                      console.log (err);
                    }
                  );
                }

              });
            });
          });

          newScore = {
            sleepScore: sentiments.Sleep.docSentiment.score,
            moodScore: sentiments.Mood.docSentiment.score,
            eventScore: sentiments.Event.docSentiment.score,
            sleepMixed: sentiments.Sleep.docSentiment.mixed,
            moodMixed: sentiments.Mood.docSentiment.mixed,
            eventMixed: sentiments.Event.docSentiment.mixed,
            survey: survey,
            createdBy: foundUser,
          }

          createScore(newScore);

          foundUser.surveys.push(survey);
          foundUser.save()
            .then(function(result) {
              res.send(result);
            })
            .catch(function(err) {
              next(new Error('Theres is an error saving survey', err));
            });
        })
          .catch(function(err) {
              next(new Error('Theres is an error saving survey', err));
            });
      })
      .catch(function(error){
        if (error) {
          console.log('there is error adding to the users survey');
          res.sendStatus(500);
        }
      });
    },

    getKeywords: function(req, res, next) {
      var token = req.headers['x-access-token'];
      if (!token) {
        next(new Error('No token found!'));
      } else {
        var user =jwt.decode(token, process.env.JWT_SECRET);
        User.findOne({username: user.username})
        .populate('surveys')
        .exec(function(err, result) {
          if (err || result === null) next(new Error('Error finding surveys'));
          res.send(result.surveys);
        })
        .catch(function(error) {
          next(new Error(error));
        });
      }
    }
};
