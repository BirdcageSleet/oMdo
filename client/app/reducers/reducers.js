var combineReducers = require('redux').combineReducers;
var authReducer = require('./authReducer');
var profileReducer = require('./profileReducer');
var surveyReducer = require('./surveyReducer');
var twitReducer = require('./twitReducer');
var modalReducer = require('./modalReducer');
var homeReducer = require('./homeReducer');

exports.rootReducer =  combineReducers({
  profileReducer: profileReducer,
  authReducer: authReducer,
  surveyReducer: surveyReducer,
  twitReducer: twitReducer,
  modalReducer: modalReducer,
  homeReducer: homeReducer
});
