var actions = require('../actions/actions');

var initialState = {
  question: 0,
  feeling: 3,
  anxiety:3,
  energy: 3,
  sleep: 3,
  mood: 3,
  majorEvent: false,
  moodElaborate: '',
  sleepElaborate: '',
  eventElaborate: '',
  isLoading: false,
  error: false
};

function surveyReducer(state, action) {
  if(state === undefined) {
    state = initialState;
  }
  switch(action.type) {
    case actions.PREV_QUESTION:
      return Object.assign({}, state, {
        question: question--
      })
    case actions.NEXT_QUESTION:
      return Object.assign({}, state, {
        question: question++
      })
    case actions.SURVEY_SUBMIT:
      return Object.assign({}, state, {
        feeling:3,
        anxiety:3,
        energy: 3,
        sleep: 3,
        mood: 3,
        majorEvent: false,
        moodElaborate: '',
        sleepElaborate: '',
        eventElaborate: '',
        isLoading: true
      });
    case actions.SURVEY_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false
      });
    case actions.SURVEY_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: true
      });
    case actions.FEELING_CHANGE:
      return Object.assign({}, state, {
        feeling: action.feeling
      });
    case actions.ANXIETY_CHANGE:
      return Object.assign({}, state, {
        anxiety: action.anxiety
      });
    case actions.SLEEP_CHANGE:
      return Object.assign({}, state, {
        sleep: action.sleep
      });
    case actions.MOOD_CHANGE:
      return Object.assign({}, state, {
        mood: action.mood
      });
    case actions.MAJOR_EVENT_CHANGE:
      return Object.assign({}, state, {
        majorEvent: action.eventChange
      });
    case actions.EVENT_ELABORATE_CHANGE:
      return Object.assign({}, state, {
        eventElaborate: action.eventDetail
      });
    case actions.ENERGY_CHANGE:
      return Object.assign({}, state, {
        energy: action.energy
      });
    case actions.SLEEP_ELABORATE_CHANGE:
      return Object.assign({}, state, {
        sleepElaborate: action.sleepDetail
      });
    case actions.MOOD_ELABORATE_CHANGE:
      return Object.assign({}, state, {
        moodElaborate: action.moodDetail
      });
    default:
      return state;
  }
};

module.exports = surveyReducer;
