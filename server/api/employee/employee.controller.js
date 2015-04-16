'use strict';

var _ = require('lodash');
var Employee = require('./employee.model');
var User = require('../user/user.model');

// Get list of employees
exports.findAll = function(req, res) {
  Employee
  .find()
  .populate('branch createdBy user')
  .exec(function (err, employeeList) {
    if (err) { 
      return handleError(res, err);
    }

    return res.json(200, employeeList);
  });
};

// Get list of employees by branchId
exports.findAllByBranch = function (req, res) {
  var branch = req.body.branch;

  Employee
  .find({
    branch: branch
  })
  .populate('user')
  .exec(function (err, employeeList) {
    if (err) { 
      return handleError(res, err);
    }

    return res.json(200, employeeList);
  });
};

// Get a single employee
exports.show = function (req, res) {
  Employee.findById(req.params.id, function (err, employee) {
    if(err) { return handleError(res, err); }
    if(!employee) { return res.send(404); }
    return res.json(employee);
  });
};

// Creates a new employee in the DB.
exports.create = function (req, res) {
  var employee = req.body;
  var email = 'employee::';

  if (employee.role === 'admin') {
    email += 'admin::';
  }

  email += employee.firstname.en.toLowerCase() + '.' + employee.lastname.en.toLowerCase();

  User.findOne({
    email: email
  })
  .exec(function (err, user) {
    if (err) return done(err);

    Employee.create(employee, function (err, employee) {
      if (err) { return handleError (res, err); }

      var displayedName1 = employee.firstname.en.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });

      var displayedName2 = employee.lastname.en.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });

      User.create({
        displayedName: displayedName1 + ' ' + displayedName2.charAt(0),
        email: email,
        password: 'Pianoforte',
        role: employee.role,
        branch: employee.branch,
        profile: {
          employee: employee._id
        }
      }, function (err, newUser) {
        employee.user = newUser._id;
        employee.save();
      });

      return res.json(201, employee);
    });
  });
};

// Updates an existing employee in the DB.
exports.update = function (req, res) {
  var tempEmployee = req.body;

  Employee.findById(tempEmployee._id, function (err, employee) {
    if (err) { return handleError(res, err); }

    var updated = _.merge(employee, tempEmployee);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, employee);
    });
  });

  // if (req.body._id) { delete req.body._id; }
  // Employee.findById(req.params.id, function (err, employee) {
  //   if (err) { return handleError(res, err); }
  //   if (!employee) { return res.send(404); }
  //   var updated = _.merge(employee, req.body);
  //   updated.save(function (err) {
  //     if (err) { return handleError(res, err); }
  //     return res.json(200, employee);
  //   });
  // });
};

function handleError(res, err) {
  return res.send(500, err);
}