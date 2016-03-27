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
          console.log('res from success ', res.data.tone_categories);
          dispatch(module.exports.twitSuccess(res.data.tone_categories));
          // console.log('twitSubmit res: ', res.data.tweets);
        })
        .catch(function(err) {
          dispatch(module.exports.twitFailure());
        });
    };
  }
};
