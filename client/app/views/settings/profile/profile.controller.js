'use strict';

angular.module('pianoforteApp')
  .controller('ProfileSettingsCtrl', function ($scope, $modal, Auth, DialogFactory, MenuFactory, EmployeeService) {
    $scope.sidebarMenuList = MenuFactory.getSidebarMenu('settings');
    $scope.profile = Auth.getCurrentUserProfile();
    $scope.isEditMode = false;

    $scope.editEnglishProfile = function () {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('EnglishProfileEditor');

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          profile: function () {
            return {
              firstname: $scope.profile.firstname.en,
              lastname: $scope.profile.lastname.en,
              nickname: $scope.profile.nickname.en
            };
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then(function (text) {
          console.log('text: ' + text);
        }, function () {
          // Run when clicking on cancel
        });
      }
    };

    $scope.editThaiProfile = function () {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('ThaiProfileEditor');

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          profile: function () {
            return angular.copy($scope.profile);
          }
        };

        modalInstance = $modal.open(dialogOptions);

        modalInstance.result.then(function (edittedProfile) {
          EmployeeService.update(edittedProfile).then(function (profile) {
            $scope.profile = angular.copy(profile);
          }).catch(function (err) {
            // TODO
          });
        }, function () {
          // Run when clicking on cancel
        });
      }
    };
  });
