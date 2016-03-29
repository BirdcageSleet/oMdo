var actions = require('../actions/actions');
var axios = require('axios');
var dispatch = require('../store/store').dispatch;
var browserHistory = require('react-router').browserHistory;


module.exports = {
  surveysLoading: function() {
    return {type: actions.SURVEYS_LOADING};
  },
  surveysNotLoaded: function() {
    return {type: actions.SURVEYS_NOT_LOADED};
  },
  surveysLoaded: function(surveys) {
    return {type: actions.SURVEYS_LOADED, surveys: surveys};
  },
  loadSurveys: function() {
    return function() {
      dispatch(module.exports.surveysLoading());
      axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
      axios.get('/user/userData')
        .then(function(response) {
          var graphData = response.data;
          if (graphData.length > 7) {
            graphData = graphData.slice(graphData.length-7);
          }
          dispatch(module.exports.surveysLoaded(graphData));
        })
        .catch(function(error) {
          dispatch(module.exports.surveysNotLoaded());
        });
    };
  },
  addSleepNote: function(note) {
    return {type: actions.SLEEP_NOTE, sleepNote: note};
  },
  addMoodNote: function(note) {
    return {type: actions.MOOD_NOTE, moodNote: note};
  },
  addEventNote: function(note) {
    return {type: actions.EVENT_NOTE, eventNote: note};
  },
  addNotes: function(notes) {
    return function(dispatch) {
      axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
      axios.put('/user/userData', notes)
        .then(function(response) {
          console.log('addNotes success ', response);
        })
        .catch(function(error) {
          console.log('addNotes error', error);
        });
    };
  }
};
