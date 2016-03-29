var actions = require('../actions/actions')
var axios = require('axios');
var browserHistory = require('react-router').browserHistory;

module.exports = {
  surveySubmit: function() {
    return {type: actions.SURVEY_SUBMIT};
  },
  surveySuccess: function() {
    return {type: actions.SURVEY_SUCCESS};
  },
  surveyFailure: function() {
    return {type: actions.SURVEY_FAILURE};
  },
  // prevQuestion: function() {
  //   return {type: actions.PREV_QUESTION}
  // },
  // nextQuestion: function() {
  //   return {type: actions.NEXT_QUESTION}

  // },
  feelingChange: function(feeling) {
    return {type: actions.FEELING_CHANGE, feeling: feeling};
  },
  anxietyChange: function(anxiety) {
    return {type: actions.ANXIETY_CHANGE, anxiety: anxiety};
  },
  sleepChange: function(sleep) {
    return {type: actions.SLEEP_CHANGE, sleep: sleep};
  },
  moodChange: function(mood) {
    return {type: actions.MOOD_CHANGE, mood: mood};
  },
  majorEventChange: function(eventChange) {
    return {type: actions.MAJOR_EVENT_CHANGE, eventChange: eventChange};
  },
  eventElaborateChange: function(eventDetail) {
    return {type: actions.EVENT_ELABORATE_CHANGE, eventDetail: eventDetail};
  },
  energyChange: function(energy) {
    return {type: actions.ENERGY_CHANGE, energy: energy};
  },
  sleepElaborateChange: function(sleepDetail) {
    return {type: actions.SLEEP_ELABORATE_CHANGE, sleepDetail: sleepDetail};
  },
  moodElaborateChange: function(moodDetail) {
    return {type: actions.MOOD_ELABORATE_CHANGE, moodDetail: moodDetail};
  },
  submitSurvey: function(survey) {
    axios.defaults.headers.common['x-access-token'] = window.localStorage.getItem('x-access-token');
    return function(dispatch) {
      dispatch(module.exports.surveySubmit());
      axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
      axios.post('/user/userData', survey)
        .then(function(response) {
          dispatch(module.exports.surveySuccess());
          browserHistory.push('/profile');
        })
        .catch(function(error) {
          dispatch(module.exports.surveyFailure());
        });
    };
  }
};
