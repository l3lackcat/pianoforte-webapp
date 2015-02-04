'use strict';

angular.module('pianoforteApp')
  .factory('Profile', function (EmployeeService) {

    return {
      get: function () {
        var profile = {};
        var currentUser = Auth.getCurrentUser();
        var role = currentUser.role || '';

        if (role === 'admin') {
          // TODO
        } else if ((role === 'manager') || (role === 'employee')) {
          EmployeeService.findOneByUser(currentUser._id).then(function (employee) {
            profile = employee;
          }).catch( function (err) {
            profile = {};
          });
        } else if (role === 'teacher') {
          // TODO
        } else if (role === 'student') {
          // TODO
        }

        return profile;
      }
    };
  });
