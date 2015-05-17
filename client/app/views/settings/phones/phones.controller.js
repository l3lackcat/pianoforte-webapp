'use strict';

angular.module('pianoforteApp')
  .controller('PhoneSettingsCtrl', function ($scope, $modal, Auth, DialogFactory, MenuFactory, EmployeeService) {
    $scope.sidebarMenuList = MenuFactory.getSidebarMenu('settings');
    $scope.profile = Auth.getCurrentUserProfile();

    $scope.updatePhones = function (profile) {
      EmployeeService.update(profile).then(function (profile) {
        $scope.profile = angular.copy(profile);
        Auth.updateCurrentUserProfile(profile);
      }).catch(function (err) {
        // TODO
      });
    };

    $scope.openPhoneEditor = function (index) {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('PhoneEditor');
      var tempProfile = angular.copy($scope.profile);

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          phone: function () {
            var phone = {};
            var tempPhone = angular.copy(tempProfile.contacts.phones[index]);

            if (tempPhone === undefined) {
              phone = {
                label: '',
                value: '',
                primary: false
              };
            } else {
              phone = {
                index: index,
                label: tempPhone.label || '',
                value: tempPhone.value || '',
                primary: tempPhone.primary || false
              };
            }

            return phone;
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then(function (phone) {
          var isSetPrimaryNumber = false;

          if (phone.primary === true) {
            isSetPrimaryNumber = true;

            for (var i = tempProfile.contacts.phones.length - 1; i >= 0; i--) {
              if (i !== index) {
                tempProfile.contacts.phones[i].primary = false;
              }
            }
          } else {
            for (var i = tempProfile.contacts.phones.length - 1; i >= 0; i--) {
              if (i !== index) {
                if (tempProfile.contacts.phones[i].primary === true) {
                  isSetPrimaryNumber = true;
                  break;
                }
              }
            }
          }

          if (phone.index === undefined) {
            tempProfile.contacts.phones.push(phone);
          } else {
            tempProfile.contacts.phones[index] = angular.copy(phone);
          }

          if (isSetPrimaryNumber === false) {
            tempProfile.contacts.phones[0].primary = true;
          }

          $scope.updatePhones(tempProfile);
        }, function () {
          // Do Nothing
        });
      }
    };

    $scope.removePhone = function (index) {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('ConfirmDialog');
      var tempProfile = angular.copy($scope.profile);

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          text: function () {
            var phone = angular.copy(tempProfile.contacts.phones[index]);

            return 'คุณต้องการลบหมายเลข ' + phone.value + ' ใช่หรือไม่?';
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then(function () {
          var phone = tempProfile.contacts.phones[index];

          if (phone !== undefined) {
            if (phone.primary === true) {
              if (index > 0) {
                tempProfile.contacts.phones[0].primary = true;
              } else {
                if (tempProfile.contacts.phones.length > 1) {
                  tempProfile.contacts.phones[1].primary = true;
                }
              }
            }

            tempProfile.contacts.phones.splice(index, 1);
            $scope.updatePhones(tempProfile);
          }
        }, function () {
          // Do Nothing
        });
      }
    };

    $scope.setPrimary = function (index) {
      var tempProfile = angular.copy($scope.profile);

      for (var i = tempProfile.contacts.phones.length - 1; i >= 0; i--) {
        if (i === index) {
          tempProfile.contacts.phones[i].primary = true;
        } else {
          tempProfile.contacts.phones[i].primary = false;
        }
      }

      $scope.updatePhones(tempProfile);
    };
  });
