var mongoose = require('mongoose');
var User = require('./userSchema');
var db = require('../config');

var MoodSchema = new mongoose.Schema({
  userScore: Number,
  oMdoScore: Number,
  keywords: [String],
  surveyDate: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

var Mood = mongoose.model('Mood', MoodSchema);

module.exports = Mood;


var Results = new mongoose.Schema({
  feeling: [{mongoose.Schema.Types.ObjectId, ref: 'Feeling'}],
  anxiety: [{mongoose.Schema.Types.ObjectId, ref: 'Anxiety'}],
  energy: [{mongoose.Schema.Types.ObjectId, ref: 'Energy'}],

})