'use strict';

angular.module('pianoforteApp')
  .controller('InputDialogCtrl', function ($scope, $modalInstance, properties) {
    $scope.properties = properties;
    $scope.errors = {};

    $scope.onSubmit = function () {
      var isValid = true;
      var value = $scope.properties.value;

      if (properties.isRequired === true) {
        if ((value === '') || (value === undefined)) {
          $scope.errors.value = 'This is a required field';
          isValid = false;
        } else {
          delete $scope.errors.value;
        }
      }

      if (isValid === true) {
        $modalInstance.close($scope.properties);
      }
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
