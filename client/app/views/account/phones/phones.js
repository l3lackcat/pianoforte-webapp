'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/account/phones', {
        templateUrl: 'app/views/account/phones/phones.html',
        controller: 'AccountPhonesCtrl',
        roles: ['student', 'teacher', 'employee', 'manager', 'admin']
      });
  });
