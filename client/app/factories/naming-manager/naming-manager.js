'use strict';

angular.module('pianoforteApp')
  .factory('NamingManager', function () {
    var toTitleCase = function (str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    };

    return {
      getDisplayName: function (firstname, lastname) {
        var displayName = '';

        displayName += toTitleCase(firstname);
        displayName += ' ';
        displayName += toTitleCase(lastname).charAt(0);
        displayName += '.';

        return displayName;
      }
    };
  });
