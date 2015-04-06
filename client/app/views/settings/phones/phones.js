'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/settings/phones', {
        templateUrl: 'app/views/settings/phones/phones.html',
        controller: 'PhoneSettingsCtrl',
        roles: ['student', 'teacher', 'employee', 'manager', 'admin']
      });
  });
