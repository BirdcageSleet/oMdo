var mongoose = require('mongoose');
var User = require('./userSchema');
var db = require('../config');

var KeywordSchema = new mongoose.Schema({
 keyword: String,
 userScores: [Number],
 docScores: [Number],
 oMdoScores: [Number],
 relevance: [Number],
 field: String,
 surveyDate: Date,
 user: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'User'
 }
});

var Keyword = mongoose.model('Keyword', KeywordSchema);

module.exports = Keyword;