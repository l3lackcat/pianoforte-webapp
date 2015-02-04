'use strict';

angular.module('pianoforteApp')
  .controller('AdminBranchNewCtrl', function ($scope, $location, Auth, BranchService) {
    $scope.branch = {};
    $scope.errors = {};

    $scope.create = function (form) {
      $scope.submitted = true;

      if (form.$valid) {
        BranchService.create($scope.branch).then(function () {
          $location.path('/admin/branches');
        }).catch( function(err) {
          $scope.errors.message = err.message;
        });
      } else {
        if (form.branchName.$error.required === true) {
          $scope.errors.branchName = 'กรุณากรอกชื่อสาขา';
        } else {
          $scope.errors.branchName = '';
        }
      }
    };
  });
