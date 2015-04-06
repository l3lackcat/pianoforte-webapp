'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/settings/emails', {
        templateUrl: 'app/views/settings/emails/emails.html',
        controller: 'EmailSettingsCtrl',
        roles: ['student', 'teacher', 'employee', 'manager', 'admin']
      });
  });
