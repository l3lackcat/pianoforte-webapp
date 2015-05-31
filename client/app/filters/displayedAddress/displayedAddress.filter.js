'use strict';

angular.module('pianoforteApp')
  .filter('displayedAddressFilter', function () {
    return function (address) {
      var displayedAddress = '';

      if (address !== undefined) {
        if ((address.province === 'กรุงเทพมหานคร') || (address.province === 'กรุงเทพฯ')) {
          displayedAddress = 'แขวง' + address.subDistrict + ' เขต' + address.district + ' จ.' + address.province;
        } else {
          displayedAddress = 'ต.' + address.subDistrict + ' อ.' + address.district + ' จ.' + address.province;
        }
      }

      return displayedAddress;
    };
  });
