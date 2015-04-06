'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/employees/new', {
        templateUrl: 'app/views/employee/employee/new/new.html',
        controller: 'EmployeeCreationCtrl',
        roles: ['manager']
      });
  });
