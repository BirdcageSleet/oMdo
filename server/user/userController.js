var User = require('../db/models/userSchema.js');
var Survey = require('../db/models/surveySchema.js');
var jwt = require('jwt-simple');
var Q = require('q');
var mongoose = require('mongoose');
var dotenv = require('dotenv').config();
var AlchemyAPI = require('../alchemyapi');
var alchemyapi = new AlchemyAPI();

module.exports = {
  signUp: function(req, res, next) {
    var username = req.body.username,
        password = req.body.password,
        newUser,
        create = Q.nbind(User.create, User),
        findOne = Q.nbind(User.findOne, User);
    findOne({username: username})
      .then(function(user) {
        if (user) {
          next(new Error('Already exists!'));
        } else {
          newUser = {
            username: username,
            password: password
          };
        }
        return create(newUser);
      })
      .then(function(user) {
        var token = jwt.encode(user, process.env.JWT_SECRET);
        res.json({token:token});
      })
      .fail(function(error) {
        console.log(error)
        next(error);
      });
  },

  signIn: function(req, res, next) {
    var username = req.body.username,
        password = req.body.password,
        findUser = Q.nbind(User.findOne, User);

    findUser({username:username})
      .then(function(user) {
      if (!user) {
        next(new Error('Cannot find the user!'));
      } else {
        return user.comparePassword(password)
        .then(function(foundUser) {
          if(foundUser) {
            var token =jwt.encode(user, process.env.JWT_SECRET);
            res.json({token: token});
          } else {
            return next(new Error('There is no user by that name'));
          }
        });
      }
      })
      .fail(function(error) {
        next(error);
      });
  },

  checkAuth: function(req,res,next) {
    var token = req.headers['x-access-token'];
    if (!token) {
      res.sendStatus(401);
    } else {
      var user = jwt.decode(token, process.env.JWT_SECRET);
      var findUser = Q.nbind(User.findOne, User);
      findUser({username: user.username})
      .then(function(foundUser) {
        if(foundUser) {
          res.sendStatus(200);
        } else {
          res.sendStatus(401);
        }
      })
      .fail(function(error) {
        next(error);
      });
    }
  },

  getUser: function(req,res,next) {
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token found!'));
    } else {
      var user =jwt.decode(token, process.env.JWT_SECRET);
      var findUser =Q.nbind(User.findOne, User);
      findUser({username: user.username})
      .then(function(foundUser) {
        if(foundUser) {
          res.send({username:foundUser.username});
        } else {
          res.sendStatus(401);
        }
      })
      .fail(function(error) {
        next(error);
      });
    }
  },

  getUserSurveys: function(req,res,next) {
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token found!'));
    } else {
      var user =jwt.decode(token, process.env.JWT_SECRET);
      User.findOne({username: user.username})
      .populate('surveys')
      .exec(function(err, result) {
        if (err || result === null) next(new Error('Error finding surveys'));
        res.send(result.surveys);
      })
      .catch(function(error) {
        next(new Error(error));
      });
    }
  },

  postUserSurvey: function(req,res,next) {
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('Token not found while trying to post to survey'));
      }
    var survey = req.body.survey;
    var user = jwt.decode(token, process.env.JWT_SECRET);
    User.findOne({username: user.username})
      .exec(function(err, foundUser) {
        if (err) {
          next(new Error('Could not find user when attempting to post survey:', err));
        }
        Survey.create(req.body, function(err, survey) {
          if (err) {
            next(new Error('There is an error in posting the survey: ', err));
          }
          alchemyapi.sentiment('text', survey.eventElaborate, {}, function(response){
            // console.log(JSON.stringify(response, null, 4));
          })
          foundUser.surveys.push(survey);
          foundUser.save()
            .then(function(result) {
              res.send(result);
            })
            .catch(function(err) {
              next(new Error('Theres is an error saving survey', err));
            });
        })
          .catch(function(err) {
              next(new Error('Theres is an error saving survey', err));
            });
      })
      .catch(function(error){
        if (error) {
          console.log('There was an error adding to the users survey');
          res.sendStatus(500);
        }
      });
    }
};
