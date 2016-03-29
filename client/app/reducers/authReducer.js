var actions = require('../actions/actions');

var initialState = {
  username: '',
  password: '',
  error: false,
  isLoggedIn: false,
  isLoading: false
};

function authReducer(state, action) {
  if(state === undefined) {
    state = initialState;
  }
  switch(action.type) {
    case actions.AUTH_SUBMIT:
      return Object.assign({}, state, {
        password: '',
        isLoading: true
      });
    case actions.AUTH_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: true
      });
    case actions.AUTH_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: true
      });
    case actions.USERNAME:
      return Object.assign({}, state, {
        username: action.username
      });
    case actions.PASSWORD:
      return Object.assign({}, state, {
        password: action.password
      });
    case actions.AUTH_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case actions.AUTHORIZED:
      return Object.assign({}, state, {
        isLoggedIn: true,
        isLoading: false
      });
    case actions.NOT_AUTHORIZED:
      return Object.assign({}, state, {
        isLoading: false
      });
    case actions.SIGN_OUT:
      return Object.assign({}, state, {
        isLoggedIn: false
      });
    default:
      return state;
  }
};


module.exports = authReducer;
