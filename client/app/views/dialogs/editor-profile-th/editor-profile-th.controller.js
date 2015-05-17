'use strict';

angular.module('pianoforteApp')
  .controller('ThaiProfileEditorDialogCtrl', function ($scope, $modalInstance, profile) {
    $scope.profile = profile;
    $scope.errors = {};
    $scope.format = 'dd MMMM yyyy';

    $scope.onSubmit = function () {
      var isValid = true;
      var firstname = $scope.profile.firstname.th;
      var lastname = $scope.profile.lastname.th;
      var nickname = $scope.profile.nickname.th;

      if ((firstname === '') || (firstname === undefined)) {
        $scope.errors.firstname = 'กรุณากรอกชื่อจริง';
        isValid = false;
      } else {
        delete $scope.errors.firstname;
      }

      if ((lastname === '') || (lastname === undefined)) {
        $scope.errors.lastname = 'กรุณากรอกนามสกุล';
        isValid = false;
      } else {
        delete $scope.errors.lastname;
      }

      if ((nickname === '') || (nickname === undefined)) {
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
