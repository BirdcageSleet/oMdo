var expect = require('chai').expect;
var actions = require('../app/actions/actions');

var expectedActions = {
  // Auth actions
  USERNAME: 'USERNAME',
  PASSWORD: 'PASSWORD',
  AUTH_SUBMIT: 'SIGN_IN_SUBMIT',
  AUTH_SUCCESS: 'SIGN_IN_SUCCESS',
  AUTH_FAILURE: 'SIGN_IN_FAILURE',
  AUTH_REQUEST: 'AUTH_REQUEST',
  AUTHORIZED: 'AUTHORIZED',
  NOT_AUTHORIZED: 'NOT_AUTHORIZED',
  SIGN_OUT: 'SIGN_OUT',

  // Nested view nav actions
  SWITCHING_VIEW: 'SWITCHING_VIEW',
  SWITCHED_VIEW: 'SWITCHED_VIEW',

  // modal actions
  TOGGLE_MODAL: 'TOGGLE_MODAL',

  // home actions
  QUOTE_FETCHED: 'QUOTE_FETCHED',

  // Survey actions
  SURVEY_SUBMIT: 'SURVEY_SUBMIT',
  SURVEY_SUCCESS: 'SURVEY_SUCCESS',
  SURVEY_FAILURE: 'SURVEY_FAILURE',
  FEELING_CHANGE: 'FEELING_CHANGE',
  ANXIETY_CHANGE: 'ANXIETY_CHANGE',
  SLEEP_CHANGE: 'SLEEP_CHANGE',
  MOOD_CHANGE: 'MOOD_CHANGE',
  MAJOR_EVENT_CHANGE: 'MAJOR_EVENT_CHANGE',
  EVENT_ELABORATE_CHANGE: 'EVENT_ELABORATE_CHANGE',
  ENERGY_CHANGE: 'ENERGY_CHANGE',
  SLEEP_ELABORATE_CHANGE: 'SLEEP_ELABORATE_CHANGE',
  MOOD_ELABORATE_CHANGE: 'MOOD_ELABORATE_CHANGE',

  PREV_QUESTION: 'PREV_QUESTION',
  NEXT_QUESTION: 'NEXT_QUESTION',

  // Profile
  SURVEYS_LOADING: 'SURVEYS_LOADING',
  SURVEYS_LOADED: 'SURVEYS_LOADED',
  SURVEYS_NOT_LOADED: 'SURVEYS_NOT_LOADED',

  // Twit
  TWIT_SUBMIT: 'TWIT_SUBMIT',
  TWIT_CHANGE: 'TWIT_CHANGE',
  TWIT_SUCCESS: 'TWIT_SUCCESS',
  TWIT_FAILURE: 'TWIT_FAILURE',
  DISPLAY_EMOTION: 'DISPLAY_EMOTION',
  HIDE_EMOTION: 'HIDE_EMOTION',
  DISPLAY_LANGUAGE: 'DISPLAY_LANGUAGE',
  HIDE_LANGUAGE: 'HIDE_LANGUAGE',
  DISPLAY_SOCIAL: 'DISPLAY_SOCIAL',
  HIDE_SOCIAL: 'HIDE_SOCIAL'
};

describe('actions', function() {
  it('should contain 12 actions', function() {
    expect(Object.keys(actions).length).to.equal(Object.keys(expectedActions).length);
  });

  it('should contain all expected actions', function() {
    Object.keys(expectedActions).forEach(function(action) {
      expect(actions[action]).to.equal(expectedActions[action]);
    });
    Object.keys(actions).forEach(function(action) {
      expect(actions[action]).to.equal(expectedActions[action]);
    })
  });
});
