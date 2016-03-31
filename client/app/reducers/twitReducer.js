var actions = require('../actions/actions');

var initialState = {
  isLoading: false,
  error: false,
  handle: '',
  emotional: [],
  writing: [],
  social: [],
  tones: [],
  chartOptions: {
    scaleOverride: true,
    scaleSteps: 10,
    scaleStepWidth: 10,
    scaleStartValue: 0
  },
  emotionDisplay: false,
  languageDisplay: false,
  socialDisplay: false
};

function twitReducer(state, action) {
  if(state === undefined) {
    state = initialState;
  }

  switch(action.type) {
    case actions.TWIT_SUBMIT:
      return Object.assign({}, state, {
        isLoading: true,
        handle: ''
      });
    case actions.TWIT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        tones: action.tweets,
        emotional: action.tweets[0].tones,
        writing: action.tweets[1].tones,
        social: action.tweets[2].tones
      });
    case actions.TWIT_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: true
      });
    case actions.TWIT_CHANGE:
      return Object.assign({}, state, {
        handle: action.handle
      });
    case actions.DISPLAY_EMOTION:
      return Object.assign({}, state, {
        emotionDisplay: true
      });
    case actions.HIDE_EMOTION:
      return Object.assign({}, state, {
        emotionDisplay: false
      });
    case actions.DISPLAY_LANGUAGE:
      return Object.assign({}, state, {
        languageDisplay: true
      });
    case actions.HIDE_LANGUAGE:
      return Object.assign({}, state, {
        languageDisplay: false
      });
    case actions.DISPLAY_SOCIAL:
      return Object.assign({}, state, {
        socialDisplay: true
      });
    case actions.HIDE_SOCIAL:
      return Object.assign({}, state, {
        socialDisplay: false
      });
    default:
      return state;
  }
}

module.exports = twitReducer;
