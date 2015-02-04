'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin/branches/info/:branchId', {
        templateUrl: 'app/views/admin/branch/info/info.html',
        controller: 'AdminBranchInfoCtrl',
        roles: ['admin']
      });
  });
