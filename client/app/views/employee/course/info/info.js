'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/courses/info:courseId', {
        templateUrl: 'app/views/employee/course/info/info.html',
        controller: 'InfoCtrl'
      });
  });
