'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/students/new', {
        templateUrl: 'app/views/employee/student/new/new.html',
        controller: 'NewCtrl'
      });
  });
