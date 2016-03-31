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
  surveysLoaded: function(surveys, entryIds) {
    return {type: actions.SURVEYS_LOADED, surveys: surveys, entryIds: entryIds};
  },
  loadSurveys: function() {
    return function(dispatch) {
      dispatch(module.exports.surveysLoading());
      axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
      axios.get('/user/userData')
        .then(function(response) {
          var graphData = response.data;
          if (graphData.length > 7) {
            graphData = graphData.slice(graphData.length-7);
          }
          // var entryIds = {};
          // response.data.forEach(function(entry) {
          //   entryIds[entry._id] = false;
          // });
          // console.log('loading the surveys ', entryIds);
          dispatch(module.exports.surveysLoaded(graphData));
          // var entryIds = {};
          // response.data.forEach(function(entry) {
          //   entryIds[entry._id] = false;
          // });
          // dispatch(module.exports.surveysLoaded(graphData, entryIds));
        })
        .catch(function(error) {
          dispatch(module.exports.surveysNotLoaded());
        });
    };
  }
  // openDiary: function(id) {
  //   return {type: actions.OPEN_DIARY, id: id};
  // },
  // closeDiary: function(id) {
  //   return {type: actions.CLOSE_DIARY, id: id};
  // }
  // openDiary: function() {
  //   return {type: actions.OPEN_DIARY};
  // },
  // closeDiary: function() {
  //   return {type: actions.CLOSE_DIARY};
  // }
};
