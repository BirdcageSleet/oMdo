var actions = require('../actions/actions');

var initialState = {
  surveys: [],
  viz: undefined,
  isLoading: true
  // entryIds: {}
  // diaryOpen: false
};

function profileReducer(state, action) {
  if (state === undefined) {
    state = initialState;
  }
  switch(action.type) {
    case actions.SURVEYS_LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        surveys: action.surveys,
        entryIds: action.entryIds
      });
    case actions.SURVEYS_NOT_LOADED:
      return Object.assign({}, state, {
        isLoading: true
      });
    case actions.SURVEYS_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      });
    // case actions.OPEN_DIARY:
    //   return Object.assign({}, state, {
    //     diaryOpen: true
    //   });
    // case actions.CLOSE_DIARY:
    //   return Object.assign({}, state, {
    //     diaryOpen: false
    //   });
    // case actions.OPEN_DIARY:
    //   console.log('entry ids from the reducer ', state.entryIds);
    //   return Object.assign({}, state, 
    //     state.entryIds[action.id] = true);
    // case actions.CLOSE_DIARY:
    //   return Object.assign({}, state,
    //     state.entryIds[action.id] = false);
    case actions.OPEN_DIARY:
      return Object.assign({}, state, 
        state.entryIds[action.id] = true);
    case actions.CLOSE_DIARY:
      return Object.assign({}, state,
        state.entryIds[action.id] = false);
    default:
      return state;
  }
}

module.exports = profileReducer;
