'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin/branches', {
        templateUrl: 'app/views/admin/branch/main/main.html',
        controller: 'AdminBranchMainCtrl',
        roles: ['admin']
      });
  });
