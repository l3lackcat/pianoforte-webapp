'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin/dashboard', {
        templateUrl: 'app/views/admin/dashboard/dashboard.html',
        controller: 'AdminDashboardCtrl',
        roles: ['admin']
      });
  });
