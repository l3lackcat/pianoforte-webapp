'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main/main.html',
        controller: 'MainCtrl',
        authenticate: true
      });
  });
