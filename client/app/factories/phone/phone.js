'use strict';

angular.module('pianoforteApp')
  .factory('PhoneFactory', function () {

    return {
      getDisplayedPhone: function (phone) {
        var displayedPhone = '';

        if (phone !== undefined) {
          var part1 = '';
          var part2 = '';
          var part3 = '';
          
          phone = phone.replace(/-/g, '');

          var phoneLength = phone.length;
          if ((phoneLength === 9) && (phone.substring(0, 2) === '02')) {
            part1 = phone.substring(0, 2);
            part2 = phone.substring(2, 5);
            part3 = phone.substring(5, phoneLength);
          } else if (phoneLength === 10) {
            part1 = phone.substring(0, 3);
            part2 = phone.substring(3, 6);
            part3 = phone.substring(6, phoneLength);
          }

          if ((part1 !== '') && (part1 !== '') && (part1 !== '')) {
            displayedPhone = part1 + '-' + part2 + '-' + part3;
          }
        }

        return displayedPhone;
      }
    };
  });
