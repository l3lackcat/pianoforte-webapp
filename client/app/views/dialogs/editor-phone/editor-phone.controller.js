'use strict';

angular.module('pianoforteApp')
  .controller('PhoneEditorDialogCtrl', function ($scope, $modalInstance, phone) {
    $scope.phone = phone;
    $scope.errors = {};

    $scope.onSubmit = function () {
      var isValid = true;
      var value = $scope.phone.value;

      if ((value === '') || (value === undefined)) {
        $scope.errors.value = 'Please enter a valid phone number';
        isValid = false;
      } else {
        delete $scope.errors.value;
      }

      if (isValid === true) {
        if ($scope.phone.label === '') {
          $scope.phone.label = 'เบอร์โทร';
        }

        $modalInstance.close($scope.phone);
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
