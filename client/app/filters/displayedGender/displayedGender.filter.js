'use strict';

angular.module('pianoforteApp')
  .filter('displayedGenderFilter', function () {
    return function (input) {
      var displayedGender = 'ชาย';

      if (input === 'F') {
      	displayedGender = 'หญิง';
      }

      return displayedGender;
    };
  });
