'use strict';

angular.module('pianoforteApp')
  .controller('AccountProfileCtrl', function ($scope, Profile) {
    $scope.profile = {};
    $scope.errors = {};
  });
