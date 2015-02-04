'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/employees', {
        templateUrl: 'app/views/employee/employee/main/main.html',
        controller: 'EmployeeMainCtrl',
        roles: ['manager']
      });
  });
