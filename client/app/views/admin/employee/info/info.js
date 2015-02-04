'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin/employees/info/:employeeId', {
        templateUrl: 'app/views/admin/employee/info/info.html',
        controller: 'AdminEmployeeInfoCtrl',
        roles: ['admin']
      });
  });
