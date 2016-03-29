var actions = require('../actions/actions')
var axios = require('axios');
var browserHistory = require('react-router').browserHistory;

module.exports = {
  twitSubmit: function() {
    return {type: actions.TWIT_SUBMIT};
  },
  twitSuccess: function(tones) {
    return {type: actions.TWIT_SUCCESS, tweets: tones};
  },
  twitFailure: function() {
    return {type: actions.TWIT_FAILURE};
  },
  twitterChange: function(name) {
    return {type: actions.TWIT_CHANGE, handle: name};
  },
  submitTwit: function(name) {
    return function(dispatch) {
      dispatch(module.exports.twitSubmit());
      axios.defaults.headers.common['x-access-token'] = window.localStorage.getItem('x-access-token');
      axios.post('/twitter/fetch', name)
        .then(function(res) {
          dispatch(module.exports.twitSuccess(res.data.tone_categories));
        })
        .catch(function(err) {
          dispatch(module.exports.twitFailure());
        });
    };
  },
  displayEmotion: function() {
    return {type: actions.DISPLAY_EMOTION};
  },
  hideEmotion: function() {
    return {type: actions.HIDE_EMOTION};
  },
  displayLanguage: function() {
    return {type: actions.DISPLAY_LANGUAGE};
  },
  hideLanguage: function() {
    return {type: actions.HIDE_LANGUAGE};
  },
  displaySocial: function() {
    return {type: actions.DISPLAY_SOCIAL};
  },
  hideSocial: function() {
    return {type: actions.HIDE_SOCIAL};
  }
};
