'use strict';

angular.module('pianoforteApp')
  .controller('LoginCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function (form) {
      $scope.submitted = true;

      if (form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $scope.errors.message = '';
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.message = err.message;
        });
      } else {
        if ((form.email.$error.required === true) && (form.password.$error.required === true)) {
          $scope.errors.message = 'Please enter your username and password.';
        } else if (form.email.$error.required === true) {
          $scope.errors.message = 'Please enter your username.';
        } else if (form.password.$error.required === true) {
          $scope.errors.message = 'Please enter your password.';
        }
      }
    };
  });
