var actions = require('../actions/actions');


module.exports = function(state, action) {
  var initalState = {modalIsOpen: false};
  state = state || initalState;

  switch (action.type) {
    case actions.TOGGLE_MODAL:
      return Object.assign({}, state, {modalIsOpen: !state.modalIsOpen});
    default: return state;
  }
}
