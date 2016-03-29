var expect = require('chai').expect;
var actions = require('../app/actions/actions');

var expectedActions = {
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
  MOOD_ELABORATE_CHANGE: 'MOOD_ELABORATE_CHANGE'
};

describe('actions', function() {
  it('should contain 12 actions', function() {
    expect(Object.keys(actions).length).to.equal(12);
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
