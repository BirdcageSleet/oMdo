var userController = require('./userController');
var express = require('express');

var app = express.Router();

app.post('/signIn',userController.signIn);
app.post('/signUp', userController.signUp);
app.get('/signedIn', userController.checkAuth);
app.get('/userData', userController.getUserSurveys);

module.exports = app;
