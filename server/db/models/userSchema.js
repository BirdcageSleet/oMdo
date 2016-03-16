var mongoose = require('mongoose');
var Q = require('q');
var bcrypt = require('bcrypt-node.js');
var Survey = require('./surveySchema.js');
var SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  survey:[{type: Schema.Types.ObjectId, ref: 'Survey'}],
  createdOn: {
    type: Date,
    default: Date.now
  },
  salt: String
});


// resources http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt
// https://github.com/kriskowal/q

UserSchema.pre('save', function() {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      return next(err);
    }
    bycrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(passwordAttempt) {
  var defer = Q.defer();
  var hashed = this.password;
  bycrypt.compare(passwordAttemp, hashed, function(err, isMatched) {
    if (err) {
      defer.reject(err);
    } else {
      defer.resolve(isMatched);
    }
  });
  return defer.promise;
};

var User = mongoose.model('User', UserSchema);

module.exports = User;
