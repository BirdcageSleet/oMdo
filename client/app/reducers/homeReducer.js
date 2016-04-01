var actions = require('../actions/actions');

module.exports = function(state, action) {
  var initialState = {quote: {quote: 'Please check back for a new quote.', author: 'oMdo Dev Team'}};
  state = state || initialState;
  switch(action.type) {
    case actions.QUOTE_FETCHED:
      return Object.assign({}, state, {
        quote: action.quote
      });
    default:
      return state;
  }
};
