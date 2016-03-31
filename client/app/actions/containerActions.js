var actions = require('./actions');

module.exports = {
  switchingView: function(key) {
    return {type: actions.SWITCHING_VIEW, key: key};
  },
  switchedView: function() {
    return {type: actions.SWITCHED_VIEW};
  },
  switchView: function(key) {
    return function(dispatch) {
      dispatch(module.exports.switchingView(key));
      dispatch(module.exports.switchedView());
    };
  }
}
