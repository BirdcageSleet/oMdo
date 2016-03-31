var surveyController = require('./surveyController');
var express = require('express');

var app = express.Router();

app.get('/', surveyController.surveyTest);

module.exports = app;
