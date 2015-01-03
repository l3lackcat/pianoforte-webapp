'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/views/login/login.html',
        controller: 'LoginCtrl'
      });
  });
