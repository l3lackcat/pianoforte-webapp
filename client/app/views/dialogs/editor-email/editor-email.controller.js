'use strict';

angular.module('pianoforteApp')
  .controller('EmailEditorDialogCtrl', function ($scope, $modalInstance, email) {
    $scope.email = email;
    $scope.errors = {};

    $scope.onSubmit = function () {
      var isValid = true;
      var value = $scope.email.value;
      var emailRegEx = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

      if ((value === '') || (value === undefined) || (!emailRegEx.test(value))) {
        $scope.errors.value = 'Please enter a valid email address';
        isValid = false;
      } else {
        delete $scope.errors.value;
      }

      if (isValid === true) {
        if ($scope.email.label === '') {
          $scope.email.label = 'อีเมล์';
        }

        $modalInstance.close($scope.email);
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
