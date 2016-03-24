var User = require('../db/models/userSchema.js');
var Survey = require('../db/models/surveySchema.js');
var jwt = require('jwt-simple');
var Q = require('q');
var mongoose = require('mongoose');
var dotenv = require('dotenv').config();
var AlchemyAPI = require('../alchemyapi');
var alchemyapi = new AlchemyAPI();

var alchemyTextCalls = function (userText) {
  alchemyapi.sentiment('text', userText, {}, function(response){
    console.log(JSON.stringify(response, null, 4));
  })
  alchemyapi.concepts('text', userText, {}, function(response){
    console.log(JSON.stringify(response), null, 4);
  })
   alchemyapi.keywords('text', userText, { 'sentiment':1 }, function(response){
    console.log(JSON.stringify(response), null, 4);
  })
};

module.exports = {
  surveyTest: function(req, res) {
    console.log(req.headers);
    res.send({test: 'Feelings noted!'});
  },

  postUserSurvey: function(req,res,next) {
    var token = req.headers['x-access-token'];
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

          alchemyTextCalls(survey.sleepElaborate);
          alchemyTextCalls(survey.eventElaborate);
          alchemyTextCalls(survey.moodElaborate);

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