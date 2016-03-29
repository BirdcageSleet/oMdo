var authController = require('./authController');
var express = require('express');

var app = express.Router();

app.get('/', authController.authTest);

module.exports = app;
