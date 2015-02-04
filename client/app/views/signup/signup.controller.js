'use strict';

angular.module('pianoforteApp')
  .controller('SignupCtrl', function ($scope, $location, Auth) {
    $scope.employee = {};
    $scope.user = {};
    $scope.errors = {};

    $scope.signup = function (form) {
      Auth.createUser({
          name: 'Golffy',
          email: 'l3ento',
          password: 'P@ssw0rd'
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
    };
  });
