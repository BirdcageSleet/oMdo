var expect = require('chai').expect;
var reducer =  require('../app/reducers/surveyReducer');

describe('survey reducer', function() {
  it('shoud return the initial state', function() {
    expect(reducer(undefined, {})).to.equal([{
      generalFeel: undefined,
      anxietyLevel: undefined,
      energyLevel: undefined,
      sleepQuality: undefined,
      currentMood: undefined,
      majorEvent: undefined,
      moodElaborate: '',
      sleepElaborate: '',
      eventElaborate: '',
      isLoading: false,
      error: false
    }])
  });
  it('should exist', {
    expect(reducer).to.exist;
  });
});
