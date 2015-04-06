'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/settings/change-password', {
        templateUrl: 'app/views/settings/change-password/change-password.html',
        controller: 'ChangePasswordCtrl',
        roles: ['student', 'teacher', 'employee', 'manager', 'admin']
      });
  });
