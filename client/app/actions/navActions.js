var actions = require('./actions')
var browserHistory = require('react-router').browserHistory;

module.exports = {
  signOut: function() {
    return {type: actions.SIGN_OUT};
  },
  requestSignOut: function() {
    return function(dispatch) {
      dispatch(module.exports.signOut());
      localStorage.setItem('token', '');
    };
  }
};
