var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var User = require('./userSchema');
var autoIncrement = require('mongoose-auto-increment');
var db = require('../config.js');

autoIncrement.initialize(db);
var numerical = {
  type: Number,
  required: true,
  default: 3
};

var SurveySchema = new mongoose.Schema({
  surveyId: Number,
  feeling: numerical,
  anxiety: numerical,
  energy: numerical,
  sleep: numerical,
  sleepElaborate: String,
  mood: numerical,
  moodElaborate: String,
  majorEvent: Boolean, // ? Boolean ?
  eventElaborate: String,
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  createdOn: {
    type: Date,
    default: Date.now
  }
});

SurveySchema.plugin(autoIncrement.plugin, {model:'Survey', field:'surveyId'});
SurveySchema.plugin(findOrCreate);

var Survey = mongoose.model('Survey', SurveySchema);

module.exports = Survey;
