'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'app/views/signup/signup.html',
        controller: 'SignupCtrl'
      });
  });
