'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/teachers/new', {
        templateUrl: 'app/views/employee/teacher/new/new.html',
        controller: 'NewCtrl',
        roles: ['employee', 'manager']
      });
  });
