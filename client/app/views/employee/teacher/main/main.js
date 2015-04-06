'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/teachers', {
        templateUrl: 'app/views/employee/teacher/main/main.html',
        controller: 'MainCtrl',
        roles: ['employee', 'manager']
      });
  });
