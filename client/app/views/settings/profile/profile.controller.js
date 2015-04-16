'use strict';

angular.module('pianoforteApp')
  .controller('ProfileSettingsCtrl', function ($scope, $modal, Auth, DialogFactory, MenuFactory, EmployeeService) {
    $scope.sidebarMenuList = MenuFactory.getSidebarMenu('settings');
    $scope.profile = Auth.getCurrentUserProfile();
    $scope.isEditMode = false;

    $scope.updateEdittedProfile = function (edittedProfile) {
      EmployeeService.update(edittedProfile).then(function (profile) {
        $scope.profile = angular.copy(profile);
      }).catch(function (err) {
        // TODO
      });
    };

    $scope.removeEdittedProfile = function () {
      // Do Nothing
    };

    $scope.openEnglishProfileEditor = function () {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('EnglishProfileEditor');

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          profile: function () {
            return angular.copy($scope.profile);
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then($scope.updateEdittedProfile, $scope.removeEdittedProfile);
      }
    };

    $scope.openThaiProfileEditor = function () {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('ThaiProfileEditor');

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          profile: function () {
            return angular.copy($scope.profile);
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then($scope.updateEdittedProfile, $scope.removeEdittedProfile);
      }
    };
  });
