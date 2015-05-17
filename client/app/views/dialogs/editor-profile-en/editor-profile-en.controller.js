'use strict';

angular.module('pianoforteApp')
  .controller('EnglishProfileEditorDialogCtrl', function ($scope, $modalInstance, profile) {
    $scope.profile = profile;
    $scope.errors = {};

    $scope.onSubmit = function () {
      var isValid = true;
      var firstname = $scope.profile.firstname.en;
      var lastname = $scope.profile.lastname.en;
      var nickname = $scope.profile.nickname.en;

      if ((firstname === '') || (firstname === undefined)) {
        $scope.errors.firstname = 'Please enter first name';
        isValid = false;
      } else {
        delete $scope.errors.firstname;
      }

      if ((lastname === '') || (lastname === undefined)) {
        $scope.errors.lastname = 'Please enter last name';
        isValid = false;
      } else {
        delete $scope.errors.lastname;
      }

      if ((nickname === '') || (nickname === undefined)) {
        $scope.errors.nickname = 'Please enter nickname';
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
