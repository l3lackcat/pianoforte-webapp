'use strict';

angular.module('pianoforteApp')
  .controller('AddressSettingsCtrl', function ($scope, $modal, Auth, DialogFactory, MenuFactory, EmployeeService) {
    $scope.sidebarMenuList = MenuFactory.getSidebarMenu('settings');
    $scope.profile = Auth.getCurrentUserProfile();

    $scope.updateAddresses = function (edittedProfile) {
      EmployeeService.update(edittedProfile).then(function (newProfile) {
        $scope.profile = angular.copy(newProfile);
        Auth.updateCurrentUserProfile(newProfile);
      }).catch(function (err) {
        // TODO
      });
    };

    $scope.openAddressEditor = function (index) {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('AddressEditor');
      var tempProfile = angular.copy($scope.profile);

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          address: function () {
            var address = {};
            var tempAddress = angular.copy(tempProfile.addresses[index]);

            if (tempAddress === undefined) {
              address = {
                buildingName: '',
                streetAddress: '',
                subDistrict: '',
                district: '',
                province: '',
                country: 'ไทย',
                postcode: ''
              };
            } else {
              address = {
                index: index,
                buildingName: tempAddress.buildingName || '',
                streetAddress: tempAddress.streetAddress || '',
                subDistrict: tempAddress.subDistrict || '',
                district: tempAddress.district || '',
                province: tempAddress.province || '',
                country: tempAddress.country || 'ไทย',
                postcode: tempAddress.postcode || ''
              };
            }

            return address;
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then(function (address) {
          if (address.index === undefined) {
            tempProfile.addresses.push(address);
          } else {
            tempProfile.addresses[index] = angular.copy(address);
          }

          $scope.updateAddresses(tempProfile);
        }, function () {
          // Do Nothing
        });
      }
    };

    $scope.removeAddress = function (index) {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('ConfirmDialog');
      var tempProfile = angular.copy($scope.profile);

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          text: function () {
            return 'คุณต้องการลบที่อยู่นี้ใช่หรือไม่?';
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then(function () {
          tempProfile.addresses.splice(index, 1);
          $scope.updateAddresses(tempProfile);
        }, function () {
          // Do Nothing
        });
      }
    };
  });
