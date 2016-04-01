var quoteController = require('./quoteController');
var app = require('express').Router();

app.get('/', quoteController.getQuote);

module.exports = app;
