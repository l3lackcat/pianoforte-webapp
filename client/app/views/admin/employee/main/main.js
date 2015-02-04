'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin/employees', {
        templateUrl: 'app/views/admin/employee/main/main.html',
        controller: 'AdminEmployeeMainCtrl',
        roles: ['admin']
      });
  });
