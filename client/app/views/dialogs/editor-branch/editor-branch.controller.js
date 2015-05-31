'use strict';

angular.module('pianoforteApp')
  .controller('BranchEditorDialogCtrl', function ($scope, $modalInstance, AddressFactory, branch) {
    $scope.branch = branch;
    $scope.subDistrictList = [];
    $scope.phone = '';
    $scope.mobile = '';
    $scope.email = '';
    $scope.address = {};
    $scope.errors = {};

    $scope.refreshSubDistrictList = function (subDistrict) {
      if (subDistrict !== '') {
        $scope.subDistrictList = AddressFactory.getSubDistrictList(subDistrict);
      }
    };

    $scope.onSelectSubDistrict = function (subDistrictData) {
      $scope.address.subDistrict = subDistrictData.SubDistrict;
      $scope.address.district = subDistrictData.District;
      $scope.address.province = subDistrictData.Province;
      $scope.address.postcode = subDistrictData.Postcode;
      $scope.address.country = 'ไทย';
    };

    $scope.addPhone = function (label, value, isPrimary) {
      $scope.branch.contacts.phones.push({
        label: label,
        value: value.replace(/-/g , ''),
        primary: isPrimary
      });
    };

    $scope.addEmail = function (label, value, isPrimary) {
      $scope.branch.contacts.emails.push({
        label: label,
        value: value,
        primary: isPrimary
      });
    };

    $scope.addAddress = function (address) {
      $scope.branch.address = angular.copy(address);
    };

    $scope.onSubmit = function () {
      var isValid = true;
      var branchName = $scope.branch.name;
      var streetAddress = $scope.address.streetAddress;
      var subDistrict = $scope.address.subDistrict;

      if ((branchName === '') || (branchName === undefined)) {
        $scope.errors.branchName = 'Please enter a branch name';
        isValid = false;
      } else {
        delete $scope.errors.branchName;
      }

      if ((streetAddress === '') || (streetAddress === undefined)) {
        $scope.errors.streetAddress = 'Please enter street address';
        isValid = false;
      } else {
        delete $scope.errors.streetAddress;
      }

      if ((subDistrict === '') || (subDistrict === undefined)) {
        $scope.errors.subDistrict = 'Please enter a sub-district';
        isValid = false;
      } else {
        delete $scope.errors.subDistrict;
      }

      if (isValid === true) {
        $scope.addPhone('เบอร์โทร', $scope.phone, true);
        $scope.addPhone('มือถือ', $scope.mobile, false);
        $scope.addEmail('อีเมล์', $scope.email, true);
        $scope.addAddress($scope.address);

        $modalInstance.close($scope.branch);
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
