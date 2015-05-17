'use strict';

angular.module('pianoforteApp')
  .controller('LoginCtrl', function ($scope, $location, Auth) {
    var emailPrefix = undefined;

    $scope.user = {};
    $scope.errors = {};
    $scope.roles = [
      { title: 'Admin', value: 'admin'},
      { title: 'Employee', value: 'employee'},
      { title: 'Teacher', value: 'teacher'}
    ];

    $scope.login = function (form) {
      $scope.submitted = true;

      if (form.$valid) {
        Auth.login({
          email: emailPrefix + $scope.user.email,
          password: $scope.user.password
        }).then( function() {
          // Logged in, redirect to home
          $scope.errors.message = '';

          if (Auth.isAdmin) {
            $location.path('/admin/dashboard');
          } else {
            $location.path('/');
          }
        }).catch( function(err) {
          $scope.errors.message = err.message;
        });
      } else {
        if ((form.email.$error.required === true) && (form.password.$error.required === true)) {
          $scope.errors.message = 'Please enter your username and password.';
        } else if (form.email.$error.required === true) {
          $scope.errors.message = 'Please enter your username.';
        } else if (form.password.$error.required === true) {
          $scope.errors.message = 'Please enter your password.';
        } else if (emailPrefix === undefined) {
          $scope.errors.message = 'Please select a role.';
        }
      }
    };

    $scope.onSelectRole = function (selectedRole) {
      emailPrefix = selectedRole.value + '::';
    };
  });
