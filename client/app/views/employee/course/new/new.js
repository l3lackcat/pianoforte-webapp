'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/courses/new', {
        templateUrl: 'app/views/employee/course/new/new.html',
        controller: 'NewCtrl'
      });
  });
