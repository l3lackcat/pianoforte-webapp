'use strict';

angular.module('pianoforteApp')
  .controller('ChangePasswordCtrl', function ($scope, Auth, MenuFactory) {
    $scope.sidebarMenuList = MenuFactory.getSidebarMenu('settings');
    $scope.errors = {};
    $scope.success = false;

    $scope.changePassword = function (form) {
      $scope.submitted = true;

      if (form.$valid) {
        if ($scope.user.newPassword !== $scope.user.confirmPassword) {
          $scope.addErrorMessage('alertMessage', 'Your new password and confirm password do not match.');
          $scope.reset();
        } else {
          Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
          .then(function () {
            $scope.success = true;
            $scope.reset(true);
          })
          .catch(function () {
            form.oldPassword.$setValidity('mongoose', false);
            $scope.addErrorMessage('alertMessage', 'Old password is incorrect');
            $scope.reset();
          });
        }
      } else {
        if (form.oldPassword.$error.required) {
          $scope.addErrorMessage('oldPassword', 'Please enter the old password.');
        } else if (form.newPassword.$error.required) {
          $scope.addErrorMessage('newPassword', 'Please enter a new password.');
        } else if (form.newPassword.$error.minlength) {
          $scope.addErrorMessage('newPassword', 'Password must be at least 4 characters.');
        } else if (form.confirmPassword.$error.required) {
          $scope.addErrorMessage('confirmPassword', 'Please confirm the new password.');
        }
      }
    };

    $scope.addErrorMessage = function (fieldName, message) {
      $scope.errors = {};

      if (message !== '') {
        $scope.errors[fieldName] = message;
      }
    };

    $scope.reset = function (resetAll) {
      if (resetAll === true) {
        $scope.errors = {};
      }

      $scope.user.oldPassword = '';
      $scope.user.newPassword = '';
      $scope.user.confirmPassword = '';
    };
  });
