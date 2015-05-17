'use strict';

angular.module('pianoforteApp')
  .controller('AddressInputCtrl', function ($scope, $location, AddressFactory) {
    $scope.provinceList = AddressFactory.getProvinceList();
  });
