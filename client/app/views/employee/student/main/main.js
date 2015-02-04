'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/students', {
        templateUrl: 'app/views/employee/student/main/main.html',
        controller: 'MainCtrl'
      });
  });
