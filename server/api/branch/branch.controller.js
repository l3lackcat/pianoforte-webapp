'use strict';

var _ = require('lodash');
var Branch = require('./branch.model');

// Get list of branches
exports.findAll = function (req, res) {
  Branch
  .find()
  .sort({ 'id' : 'asc' })
  .populate('manager createdBy edittedBy')
  .exec(function (err, branchList) {
    if (err) { 
      return handleError(res, err);
    }

    return res.json(200, branchList);
  });
};

// Get a single branch
exports.show = function(req, res) {
  Branch.findById(req.params.id, function (err, branch) {
    if(err) { return handleError(res, err); }
    if(!branch) { return res.send(404); }
    return res.json(branch);
  });
};

// Creates a new branch in the DB.
exports.create = function(req, res) {
  Branch.create(req.body, function(err, branch) {
    if(err) { return handleError(res, err); }
    return res.json(201, branch);
  });
};

// Updates an existing branch in the DB.
exports.update = function(req, res) {
  if (req.body._id) { delete req.body._id; }

  Branch.findById(req.params.id, function (err, branch) {
    if (err) { return handleError(res, err); }
    if (!branch) { return res.send(404); }
    
    var updated = _.merge(branch, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, branch);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}