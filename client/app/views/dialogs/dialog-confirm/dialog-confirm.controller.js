'use strict';

angular.module('pianoforteApp')
  .controller('ConfirmDialogCtrl', function ($scope, $modalInstance, text) {
    $scope.text = text;
    $scope.errors = {};

    $scope.onSubmit = function () {
      $modalInstance.close();
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
