var axios = require('axios');
var actions = require('./actions')
var browserHistory = require('react-router').browserHistory;

module.exports = {
  authRequest: function() {
    return {type: actions.AUTH_REQUEST};
  },
  authorized: function() {
    return {type: actions.AUTHORIZED};
  },
  notAuthorized: function() {
    return {type: actions.NOT_AUTHORIZED};
  },
  quoteFetched: function(contents) {
    return {type: actions.QUOTE_FETCHED, quote: contents};
  },
  checkAuth: function() {
    return function(dispatch) {
      dispatch(module.exports.authRequest());
      axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
      axios.get('/user/signedIn')
      .then(function(response) {
        dispatch(module.exports.authorized());
      })
      .catch(function(error) {
        dispatch(module.exports.notAuthorized());
        browserHistory.push('/signin');
      });
    };
  },
  fetchQuote: function() {
    return function(dispatch) {
      axios.get('/quote/')
      .then(function(response) {
        dispatch(module.exports.quoteFetched(response.data.contents));
      })
      .catch(function(error) {
        console.error('Couldn\'t fetch quote', error);
      })
    }
  }
}
