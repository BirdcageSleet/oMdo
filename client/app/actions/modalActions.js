var actions = require('./actions');

module.exports = {
  toggleModal: function() {
    return function(dispatch) {
      dispatch({type: actions.TOGGLE_MODAL});
    };
  }
};
