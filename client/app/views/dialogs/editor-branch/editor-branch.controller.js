'use strict';

angular.module('pianoforteApp')
  .controller('BranchEditorDialogCtrl', function ($scope, $modalInstance, branch) {
    $scope.branch = branch;
    $scope.errors = {};

    $scope.onSubmit = function () {
      var isValid = true;
      var branchName = $scope.branch.name;

      if ((branchName === '') || (branchName === undefined)) {
        $scope.errors.branchName = 'Please enter a branch name';
        isValid = false;
      } else {
        delete $scope.errors.branchName;
      }

      $modalInstance.close($scope.branch);
    };

    $scope.onCancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };
  });
