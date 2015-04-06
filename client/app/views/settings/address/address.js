'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/settings/address', {
        templateUrl: 'app/views/settings/address/address.html',
        controller: 'AddressSettingsCtrl',
        roles: ['student', 'teacher', 'employee', 'manager', 'admin']
      });
  });
