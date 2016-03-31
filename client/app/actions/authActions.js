var axios = require('axios');
var actions = require('./actions');
var browserHistory = require('react-router').browserHistory;

module.exports = {
  authSubmit: function() {
    return {type: actions.AUTH_SUBMIT};
  },
  authSuccess: function() {
    return {type: actions.AUTH_SUCCESS};
  },
  authFailure: function() {
    return {type: actions.AUTH_FAILURE};
  },
  updateUsername: function(username) {
    return {type: actions.USERNAME, username: username};
  },
  updatePassword: function(password) {
    return {type: actions.PASSWORD, password: password};
  },
  signInRequest: function(login) {
    return function(dispatch) {
      dispatch(module.exports.authSubmit());
      axios.post('/user/signIn', login)
        .then(function(response) {
          window.localStorage.setItem('token', response.data.token);
          dispatch(module.exports.authSuccess());
          browserHistory.push('/');
        })
        .catch(function(error) {
          var errMsg = error.data.slice(0, error.data.indexOf('<'));
          if(errMsg === 'Error: Cannot find the user!') {
            dispatch(module.exports.authFailure());
            browserHistory.push('/signup');
          } else {
            dispatch(module.exports.authFailure());
          }
        });
    };
  },
  signUpRequest: function(signUp) {
    return function(dispatch) {
      dispatch(module.exports.authSubmit());
      axios.post('/user/signUp', signUp)
        .then(function(response) {
          window.localStorage.setItem('token', response.data.token);
          dispatch(module.exports.authSuccess());
          browserHistory.push('/');
        })
        .catch(function(error) {
          dispatch(module.exports.authFailure());
        });
    };
  }
};
