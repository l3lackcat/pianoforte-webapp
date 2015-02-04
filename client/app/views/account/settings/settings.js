'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/account/settings', {
        templateUrl: 'app/views/account/settings/settings.html',
        controller: 'AccountSettingsCtrl',
        roles: ['student', 'teacher', 'employee', 'manager', 'admin']
      });
  });
