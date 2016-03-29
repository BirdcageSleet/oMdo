var request = require('supertest');
var expect = require('chai').expect;
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
var server = require('../server');

mockgoose(mongoose);

describe('User functions', function() {
  var leslie = {username: 'leslie', password: 'theD'},
      token;
  describe('GET user', function(){
    beforeEach(function(done) {
      mockgoose.reset(function() {
        request(server).post('/user/signUp').send(leslie)
          .end(function(err, res) {
            if (err) console.log(err);
            token = res.body.token;
            done();
          });
      });
    });
    it('should not return a user without a token', function(done) {
      mockgoose.reset(function() {
        request(server).get('/user/').send({username: 'alon'}).expect(500)
          .then(function(res) {
            expect(res.body).to.deep.equal({});
            done();
          });
      });
    });
    it('should return a username for a user that exists', function(done) {
      request(server)
        .get('/user/').set('x-access-token', token).send(leslie)
        .then(function(response) {
          expect(response.body.username).to.equal('leslie');
          done();
        });
    });
  });
});
describe('Surveys for individual users', function() {
  var leslie = {username: 'leslie', password: 'theD'},
      alon = {username: 'alon', password: 'grits'},
      token,
      expectedSurvey = {
        feeling: 7,
        anxiety: 10,
        energy: 5,
        sleep: 'No',
        sleepElaborate: 'Didn\'t sleep',
        mood: 'Better than yours',
        moodElaborate: 'Who wouldn\'t be?',
        majorEvent:'Yes',
        eventElaborate: 'Just working on thesis'
      };
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
    it('should add a new survey for a user', function(done) {
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
    it('should get an individual users\'survey if the user has created a survey', function(done) {
      request(server).get('/user/userData').set('x-access-token', token).expect(200)
        .then(function(res) {
          var survey = res.body.surveys[0];
          Object.keys(expectedSurvey).forEach(function(key) {
            expect(expectedSurvey[key]).to.equal(survey[key]);
          })
          done();
        });
    });
    it('should not get an individual user\'s survey if the user hasn\'t created any', function(done) {
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
