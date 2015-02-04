'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin/users/info/:userId', {
        templateUrl: 'app/views/admin/user/info/info.html',
        controller: 'AdminUserInfoCtrl',
        roles: ['admin']
      });
  });
