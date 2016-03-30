var expect = require('chai').expect;
var reducer =  require('../app/reducers/surveyReducer');

describe('survey reducer', function() {
  it('shoud return the initial state', function() {
    expect(reducer(undefined, {type: undefined})).to.deep.equal({
      question: 0,
      feeling: 3,
      anxiety: 3,
      energy: 3,
      sleep: 3,
      mood: 3,
      majorEvent: false,
      moodElaborate: '',
      sleepElaborate: '',
      eventElaborate: '',
      isLoading: false,
      error: false
    })
  });
});
