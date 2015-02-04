'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/courses', {
        templateUrl: 'app/views/employee/course/main/main.html',
        controller: 'MainCtrl'
      });
  });
