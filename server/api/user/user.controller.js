'use strict';

var User = require('./user.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function(res, err) {
  return res.json(422, err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.findAll = function(req, res) {
  User.find({})
  .select('-salt -hashedPassword')
  .populate('profile.employee profile.teacher')
  .exec(function (err, userList) {
    if(err) return res.send(500, err);
    res.json(200, userList);
  });
};

/**
 * Creates a new user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);

  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    var token = jwt.sign({ _id: user._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    res.json({ token: token, _id: user._id });
  });
};

/**
 * Get a single user
 */
// exports.show = function (req, res, next) {
//   var userId = req.params.id;

//   User.findById(userId, function (err, user) {
//     if (err) return next(err);
//     if (!user) return res.send(401);
//     res.json(user.profile);
//   });
// };

/**
 * Deletes a user
 * restriction: 'admin'
 */
// exports.destroy = function(req, res) {
//   User.findByIdAndRemove(req.params.id, function(err, user) {
//     if(err) return res.send(500, err);
//     return res.send(204);
//   });
// };

/**
 * Change a users password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return validationError(res, err);
        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

/**
 * Get my info
 */
exports.me = function(req, res, next) {
  var userId = req.user._id;
  User
  .findOne({ _id: userId })
  .select('-salt -hashedPassword')
  .populate('profile.employee profile.teacher')
  .exec(function (err, user) {
    if (err) return next(err);
    if (!user) return res.json(401);

    res.json(user);
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
