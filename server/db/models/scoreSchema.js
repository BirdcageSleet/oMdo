var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var User = require('./userSchema');
var Survey = require('./surveySchema');
var autoIncrement = require('mongoose-auto-increment');
var db = require('../config.js');

autoIncrement.initialize(db);
var numerical = {
  type: Number,
  required: true,
  default: 3
};

var ScoreSchema = new mongoose.Schema({
  scoreId: Number,
  sleepScore: Number,
  moodScore: Number,
  eventScore: Number,
  sleepMixed: Number,
  moodMixed: Number,
  eventMixed: Number,
  survey: {type: mongoose.Schema.Types.ObjectId, ref: 'Survey'},
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  createdOn: {
    type: Date,
    default: Date.now
  }
});

ScoreSchema.plugin(autoIncrement.plugin, {model:'score', field:'scoreId'});
ScoreSchema.plugin(findOrCreate);

var Score = mongoose.model('Score', ScoreSchema);

module.exports = Score;
