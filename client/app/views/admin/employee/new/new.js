'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin/employees/new', {
        templateUrl: 'app/views/admin/employee/new/new.html',
        controller: 'AdminEmployeeNewCtrl',
        roles: ['admin']
      });
  });
