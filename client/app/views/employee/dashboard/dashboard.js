'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'app/views/employee/dashboard/dashboard.html',
        controller: 'EmployeeDashboardCtrl',
        roles: ['employee', 'manager']
      });
  });
