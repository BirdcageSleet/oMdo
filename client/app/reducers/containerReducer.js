var actions = require('../actions/actions');

function meditationsReducer (state, action) {
  var initialState = {
    displayed: '0',
    isLoading: false
  };

  state = state || initialState;

  switch(action.type) {
    case actions.SWITCHING_VIEW:
      return Object.assign({}, state, {
        displayed: String(action.key),
        isLoading: true
      });
    case actions.SWITCHED_VIEW:
      return Object.assign({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
};

module.exports = meditationsReducer;
