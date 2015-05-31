'use strict';

angular.module('pianoforteApp')
  .controller('AddressEditorDialogCtrl', function ($scope, $modalInstance, AddressFactory, address) {
    $scope.address = address || {};
    $scope.subDistrict = {
      selected: address.subDistrict || ''
    };
    $scope.subDistrictList = [];
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

    $scope.onSubmit = function () {
      var isValid = true;
      var streetAddress = $scope.address.streetAddress;
      var subDistrict = $scope.address.subDistrict;

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
        $modalInstance.close($scope.address);
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
