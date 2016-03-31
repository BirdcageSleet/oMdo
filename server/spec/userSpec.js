var request = require('supertest');
var expect = require('chai').expect;
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
var server = require('../server');

mockgoose(mongoose);

describe('Surveys for individual users', function() {
  var leslie = {username: 'leslie', password: 'theD'},
      alon = {username: 'alon', password: 'grits'},
      expectedSurvey = {
        "feeling": "3",
        "anxiety": "3",
        "energy": "3",
        "sleep": "3",
        "sleepElaborate": "'Didn't sleep'",
        "mood": "3",
        "moodElaborate": "'Who wouldn't be?'",
        "majorEvent":"true",
        "eventElaborate": "'Just working on thesis'"
      },
      token;
  describe('POST user surveys', function() {
    beforeEach(function(done) {
      mockgoose.reset(function() {
        request(server).post('/user/signUp').send(leslie)
          .then(function(res) {
            token = res.body.token;
            done();
          });
      });
    });
    // Find or create renders mongoose-auto-increment useless for spec
    xit('should add a new survey for a user', function(done) {
      request(server).post('/user/userData').send({survey: expectedSurvey})
        .set('x-access-token', token).expect(200)
        .then(function(res) {
          console.log(res.body)
        })

    });
  });
  describe('GET user surveys', function() {
    beforeEach(function(done) {
      mockgoose.reset(function() {
        request(server).post('/user/signUp').send(leslie)
          .then(function (res) {
            token = res.body.token;
            request(server).post('/user/userData').set('x-access-token', token)
            .send({survey: expectedSurvey})
            .then(function(res) {
              done();
            });
          });
      });
    });
    xit('should get an individual users\'survey if the user has created a survey', function(done) {
      request(server).get('/user/userData').set('x-access-token', token).expect(200)
        .then(function(res) {
          var survey = res.body.surveys[0];
          Object.keys(expectedSurvey).forEach(function(key) {
            expect(expectedSurvey[key]).to.equal(survey[key]);
          })
          done();
        });
    });
    xit('should not get an individual user\'s survey if the user hasn\'t created any', function(done) {
      var alonToken;
      request(server).post('/user/signUp').send(alon).expect(500)
        .then(function(res) {
          alonToken = res.body.token;
          request(server).get('/user/userData').set('x-access-token', alonToken).expect(200)
            .then(function(response) {
              var surveys = response.body.surveys;
              expect(surveys).to.deep.equal([]);
              done();
            });
        });
    });
  });
});
