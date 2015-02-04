'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin/users/new', {
        templateUrl: 'app/views/admin/user/new/new.html',
        controller: 'AdminUserNewCtrl',
        roles: ['admin']
      });
  });
