var express = require('express');
var twitterController = require('./twitterController');

var app = express.Router();

app.post('/fetch', twitterController.fetchTweets);

module.exports = app;