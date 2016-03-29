var User = require('../db/models/userSchema.js');
var Survey = require('../db/models/surveySchema.js');
var Keyword = require('../db/models/keywordSchema.js');
var jwt = require('jwt-simple');
var Q = require('q');
var mongoose = require('mongoose');
var dotenv = require('dotenv').config();
var AlchemyAPI = require('../alchemyapi');
var alchemyapi = new AlchemyAPI();



module.exports = {
  surveyTest: function(req, res, next) {
    console.log(req.headers);
    res.send({test: 'Feelings noted!'});
  },

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
        // console.log("IM HERE", output)
        // res.send(req.body.output);
        req.body.output = JSON.stringify(output);
        next();
      });
    }

    moodSentiment(req, res, output)
  },

  postUserSurvey: function(req,res,next) {
    // console.log('HIHIHIHIHI', req.body);
    var token = req.headers['x-access-token'];
    var create = Q.nbind(Keyword.create, Keyword);
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
          console.log('DISDASURVEY', survey);
          console.log('DISDAUSER', foundUser);

          var parsed = JSON.parse(req.body.output);
          var eventData = {sentiment: parsed.eventSentiments, keywords: parsed.eventKeywords};
          var sleepData = {sentiment: parsed.sleepSentiments, keywords: parsed.sleepKeywords};
          var moodData = {sentiment: parsed.moodSentiments, keywords: parsed.moodKeywords.keywords};
          var newKeyword; 

          // console.log(parsed.eventKeywords.keywords);

          parsed.eventKeywords.keywords.forEach(function (aKeyword) {
            Keyword.findOne({keyword: aKeyword.text})
              .then(function (foundKeyword) {
                var score = Number(aKeyword.sentiment.score);
                console.log('Scores ', score);
                console.log('Score stuff ', typeof score);
                if (!foundKeyword) {
                  newKeyword = {
                    keyword: aKeyword.text,
                    userScore: [0],
                    omdoScores: [score],
                    relevance: [aKeyword.relevance],
                    field: 'Event',
                    surveyDate: new Date(),
                    user: foundUser
                  }
                  return create(newKeyword)
                } else {
                  console.log('im found',foundKeyword);
                }

                

              });
          })

          console.log('HALLLOOOOO', JSON.stringify(moodData.keywords));

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
    }
};