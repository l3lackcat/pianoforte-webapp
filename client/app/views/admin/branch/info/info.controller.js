'use strict';

angular.module('pianoforteApp')
  .controller('AdminBranchInfoCtrl', function ($scope) {
    $scope.address = {
      buildingName: 'The Classy',
      streetAddress: '275/13 ถ.ลาดพร้าว ซ.26',
      subDistrict: 'จอมพล',
      district: 'จตุจักร',
      province: 'กรุงเทพ',
      country: 'ไทย',
      zipCode: '10900'
    }
  });
