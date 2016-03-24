var surveyController = require('./surveyController');
var express = require('express');

var app = express.Router();

//app.get('/');
app.post('/surveyData', surveyController.postAlchemyResults, surveyController.postUserSurvey);

module.exports = app;
