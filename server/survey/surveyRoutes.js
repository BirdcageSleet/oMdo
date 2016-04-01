var surveyController = require('./surveyController');
var express = require('express');

var app = express.Router();

app.post('/surveySubmit', surveyController.postAlchemyResults, surveyController.postUserSurvey);

module.exports = app;
