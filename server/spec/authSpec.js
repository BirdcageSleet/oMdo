var request = require('supertest');
var expect = require('chai').expect;
var server = require('../server');
var request = require('supertest');
var expect = require('chai').expect;
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
var server = require('../server');

mockgoose(mongoose);

describe('Test auth routes and controllers', function() {
  it('responds to /auth', function(done) {
    request(server)
      .get('/auth')
      .expect(200)
      .end(function(err, res) {
        expect(err).to.not.exist;
        expect(res.body.test).to.equal('Authorized!');
        done();
      });
  });

});

describe('User Routes', function() {
  describe('signUp', function() {
    beforeEach(function(done) {
      request(server)
        .post('/user/signUp')
        .send({username: 'alon', password: 'grits'})
        .then(function(res) {
          token = res.body.token;
          done();
        });
    });
    it('should create a new user', function(done) {
      request(server)
        .post('/user/signUp')
        .send({username: 'Person10', password: 'testing'})
        .expect(200)
        .end(function(err,res) {
          if (err) return done(err);
          expect(res.body).to.be.an('object');
          expect(res.body.username).to.equal('Person10');
          expect(res.body.token).to.be.an('string');
          mockgoose.reset(function() {
            done();
          });
      });
    });
    it('should not create a user if one with the same name already exists', function(done) {
      request(server)
        .post('/user/signUp')
        .send({username: 'alon', password:'notgrits'})
        .expect(500)
        .then(function(res) {
          expect(res.body).to.deep.equal({});
          done();
        })
    });
  });
  describe('signIn', function() {
    var token;
    beforeEach(function(done) {
      request(server)
        .post('/user/signUp')
        .send({username: 'alon', password: 'grits'})
        .then(function(res) {
          token = res.body.token;
          done();
        });
    });
    it('should not sign in a user that does not exist', function(done) {
      mockgoose.reset(function(){
        request(server)
          .post('/user/signIn')
          .send({username: 'alon', password: 'grits'})
          .expect(500)
          .then(function(res) {
            expect(res.body).to.deep.equal({});
          });
        done();
      });
    });
    it('should sign in a user that exists', function(done) {
      request(server)
        .post('/user/signIn')
        .send({username: 'alon', password: 'grits'})
        .then(function(res) {
          expect(res.body.token).to.be.a('string');
          done();
        });
    })
  });
});
