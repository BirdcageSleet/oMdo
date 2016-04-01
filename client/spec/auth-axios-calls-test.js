var expect = require('chai').expect;
var actions = require('../app/actions/authActions');
var nock = require('nock');
var thunk = require('redux-thunk');
var configureMockStore = require('./mockStore');


describe('auth axios calls', function(){
  var middlewares = [thunk];
  var mockStore = configureMockStore(middlewares);

  afterEach(function() {
    nock.cleanAll();
  });

  xit('should have a signInRequest function that calls the server and signs in with an \
  existing user with the correct password',
  function(done) {
    nock('http://localhost:3000')
      .get('/user/signIn')
      .reply(200, {body: {
      }});

      var expectedActions = [
        { type: actions.AUTH_SUBMIT },
        { type: actions.AUTH_SUCCESS}
      ];

      var store = mockStore(undefined, { username: '', password: '' }, expectedActions, done);
      store.dispatch(actions.signInRequest());
  });

  xit('should have a signIn function that calls the server and does not sign in \
  for a user with the incorrect password',
  function(done) {
    nock('localhost:3000')
      .get('/auth')
      .reply(200, {body: {
        username: ['leslie'],
        password: ['theD']
      }});

      var expectedActions = [
        { type: actions.SIGN_IN_SUBMIT },
        { type: actions.SIGN_IN_FAILURE, body: {
          username: ['leslie']
        } }
      ];

      var store = mockStore({ username: '', password: '' }, expectedActions, done);
      store.dispatch(actions.signInSubmit());
  });

  xit('should have a signUp function that calls the server and signs in with a \
  new user with a new password',
  function(done) {
    nock('localhost:3000')
      .get('/auth')
      .reply(200, {body: {
        username: ['alon'],
        password: ['grits']
      }});

      var expectedActions = [
        { type: actions.SIGN_UP_SUBMIT },
        { type: actions.SIGN_UP_SUCCESS, body: {
          username: ['alon']
        } }
      ];

      var store = mockStore({ username: '', password: '' }, expectedActions, done);
      store.dispatch(actions.signInSubmit());
  });

  xit('should have a signIn function that calls the server and does not sign up \
  for a user that already exists',
  function(done) {
    nock('localhost:3000')
      .get('/auth')
      .reply(200, {body: {
        username: ['leslie'],
        password: ['theD']
      }});

      var expectedActions = [
        { type: actions.SIGN_UP_SUBMIT },
        { type: actions.SIGN_UP_FAILURE, body: {
          username: ['leslie']
        } }
      ];

      var store = mockStore({ username: '', password: '' }, expectedActions, done);
      store.dispatch(actions.signInSubmit());
  });
})
