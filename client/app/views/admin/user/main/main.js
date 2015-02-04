'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin/users', {
        templateUrl: 'app/views/admin/user/main/main.html',
        controller: 'AdminUserMainCtrl',
        roles: ['admin']
      });
  });
