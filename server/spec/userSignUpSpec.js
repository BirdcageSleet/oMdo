var request = require('supertest');
var expect = require('chai').expect;
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
var server = require('../server');

mockgoose(mongoose);

describe('User Routes', function() {
  describe('signUp', function() {
    it('should create a new user', function(done) {
      request(server)
        .post('/user/signUp')
        .send({username: 'Person10', password: 'testing'})
        .expect(200)
        .end(function(err,res) {
          if (err) return done(err);
          expect(err).to.equal(null);
          expect(res.body).to.be.an('object');
          expect(res.body.username).to.equal('Person10');
          expect(res.body.token).to.be.an('string');
          mockgoose.reset(function() {
            done();
          });
          //done();
        });
    });
  });
});
