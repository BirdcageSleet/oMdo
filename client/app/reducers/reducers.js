var combineReducers = require('redux').combineReducers;
var routerReducer = require('react-router-redux').routerReducer;
var authReducer = require('./authReducer');
var profileReducer = require('./profileReducer');
var surveyReducer = require('./surveyReducer');
var twitReducer = require('./twitReducer');
var containerReducer = require('./containerReducer');
var modalReducer = require('./modalReducer');
var homeReducer = require('./homeReducer');

var actions = require('../actions/actions');

exports.rootReducer =  combineReducers({
  profileReducer: profileReducer,
  authReducer: authReducer,
  surveyReducer: surveyReducer,
  twitReducer: twitReducer,
  containerReducer: containerReducer,
  modalReducer: modalReducer,
  homeReducer: homeReducer
});
