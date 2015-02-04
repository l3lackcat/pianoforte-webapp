'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin/branches/new', {
        templateUrl: 'app/views/admin/branch/new/new.html',
        controller: 'AdminBranchNewCtrl',
        roles: ['admin']
      });
  });
