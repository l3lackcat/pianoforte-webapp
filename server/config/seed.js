/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Employee = require('../api/employee/employee.model');
var User = require('../api/user/user.model');

Employee.create({
  firstname: {
    en: 'Suphakiat',
    th: 'ศุภเกียรติ'
  },
  lastname: {
    en: 'Lohasammakul',
    th: 'โลหะสัมมากุล'
  },
  nickname: {
    en: 'Golf',
    th: 'กอล์ฟ'
  },
  gender: 'M',
  role: 'admin'
}, function (err, employee) {
  User.create({
    displayedName: 'Suphakiat L.',
    email: 'admin::suphakiat.lohasammakul',
    password: 'P@ssw0rd',
    role: 'admin',
    profile: {
      employee: employee._id
    }
  }, function (err, user) {
    employee.user = user._id,
    employee.createdBy = user._id
    employee.save();

    console.log('Create the first user successfully.');
  });
});