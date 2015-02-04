'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/student/info/:studentId', {
        templateUrl: 'app/views/employee/student/info/info.html',
        controller: 'InfoCtrl'
      });
  });
