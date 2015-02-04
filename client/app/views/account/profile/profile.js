'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/account/profile', {
        templateUrl: 'app/views/account/profile/profile.html',
        controller: 'AccountProfileCtrl',
        roles: ['student', 'teacher', 'employee', 'manager', 'admin']
      });
  });
