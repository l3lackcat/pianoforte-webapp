'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/account/address', {
        templateUrl: 'app/views/account/address/address.html',
        controller: 'AccountAddressCtrl',
        roles: ['student', 'teacher', 'employee', 'manager', 'admin']
      });
  });
