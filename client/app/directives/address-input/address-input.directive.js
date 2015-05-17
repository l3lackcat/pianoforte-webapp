'use strict';

angular.module('pianoforteApp')
  .directive('addressInput', function () {
    return {
      templateUrl: 'app/directives/address-input/address-input.html',
      restrict: 'EA',
      controller: 'AddressInputCtrl',
      scope: {
        address: '='
      },
      link: function (scope, element, attrs) {
      }
    };
  });