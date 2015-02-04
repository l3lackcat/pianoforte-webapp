'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/employees/info/:employeeId', {
        templateUrl: 'app/views/employee/employee/info/info.html',
        controller: 'EmployeeInfoCtrl',
        roles: ['manager']
      });
  });
