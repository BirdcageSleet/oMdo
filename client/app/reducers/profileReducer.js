var actions = require('../actions/actions');

var initialState = {
  surveys: [],
  viz: undefined,
  isLoading: true,
  sleepNote: '',
  moodNote: '',
  eventNote: ''
};

function profileReducer(state, action) {
  if (state === undefined) {
    state = initialState;
  }
  switch(action.type) {
    case actions.SURVEYS_LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        surveys: action.surveys
      });
    case actions.SURVEYS_NOT_LOADED:
      return Object.assign({}, state, {
        isLoading: true
      });
    case actions.SURVEYS_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      });
    case actions.SLEEP_NOTE:
      return Object.assign({}, state, {
        sleepNote: action.sleepNote
      });
    case actions.MOOD_NOTE:
      return Object.assign({}, state, {
        moodNote: action.moodNote
      });
    case actions.EVENT_NOTE:
      return Object.assign({}, state, {
        eventNote: action.eventNote
      });
    default:
      return state;
  }
};

module.exports = profileReducer;
