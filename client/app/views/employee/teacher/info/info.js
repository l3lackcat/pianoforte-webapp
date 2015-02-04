'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/teachers/info/:teacherId', {
        templateUrl: 'app/views/employee/teacher/info/info.html',
        controller: 'InfoCtrl'
      });
  });
