'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/account/emails', {
        templateUrl: 'app/views/account/emails/emails.html',
        controller: 'AccountEmailsCtrl',
        roles: ['student', 'teacher', 'employee', 'manager', 'admin']
      });
  });
