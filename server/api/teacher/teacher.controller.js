'use strict';

var _ = require('lodash');
var Teacher = require('./teacher.model');

// Get list of teachers
exports.index = function(req, res) {
  Teacher.find(function (err, teachers) {
    if(err) { return handleError(res, err); }
    return res.json(200, teachers);
  });
};

// Get a single teacher
exports.show = function(req, res) {
  Teacher.findById(req.params.id, function (err, teacher) {
    if(err) { return handleError(res, err); }
    if(!teacher) { return res.send(404); }
    return res.json(teacher);
  });
};

// Creates a new teacher in the DB.
exports.create = function(req, res) {
  Teacher.create(req.body, function(err, teacher) {
    if(err) { return handleError(res, err); }
    return res.json(201, teacher);
  });
};

// Updates an existing teacher in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Teacher.findById(req.params.id, function (err, teacher) {
    if (err) { return handleError(res, err); }
    if(!teacher) { return res.send(404); }
    var updated = _.merge(teacher, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, teacher);
    });
  });
};

// Deletes a teacher from the DB.
exports.destroy = function(req, res) {
  Teacher.findById(req.params.id, function (err, teacher) {
    if(err) { return handleError(res, err); }
    if(!teacher) { return res.send(404); }
    teacher.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}