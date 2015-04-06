'use strict';

angular.module('pianoforteApp')
  .controller('ThaiProfileEditorDialogCtrl', function ($scope, $modalInstance, profile) {
    $scope.profile = profile;
    $scope.errors = {};
    $scope.format = 'dd MMMM yyyy';

    $scope.onSubmit = function () {
      var isValid = true;

      if (profile.firstname === '') {
        $scope.errors.firstname = 'กรุณากรอกชื่อจริง';
        isValid = false;
      } else {
        delete $scope.errors.firstname;
      }

      if (profile.lastname === '') {
        $scope.errors.lastname = 'กรุณากรอกนามสกุล';
        isValid = false;
      } else {
        delete $scope.errors.lastname;
      }

      if (profile.nickname === '') {
        $scope.errors.nickname = 'กรุณากรอกชื่อเล่น';
        isValid = false;
      } else {
        delete $scope.errors.nickname;
      }

      if (isValid === true) {
        $modalInstance.close($scope.profile);
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
