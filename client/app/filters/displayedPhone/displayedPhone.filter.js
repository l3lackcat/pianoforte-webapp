'use strict';

angular.module('pianoforteApp')
  .filter('displayedPhoneFilter', function (PhoneFactory) {
    return function (phone) {
      return PhoneFactory.getDisplayedPhone(phone);
    };
  });
