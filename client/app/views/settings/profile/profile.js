'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/settings/profile', {
        templateUrl: 'app/views/settings/profile/profile.html',
        controller: 'ProfileSettingsCtrl',
        roles: ['student', 'teacher', 'employee', 'manager', 'admin']
      });
  });
