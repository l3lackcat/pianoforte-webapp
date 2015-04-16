'use strict';

angular.module('pianoforteApp')
  .factory('ProfileFactory', function () {
    var toTitleCase = function (str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    };

    return {
      // getDisplayedName: function (profile) {
      //   var displayName = '';

      //   if ((profile !== null) && (profile !== undefined)) {
      //     var firstname = profile.firstname.en;
      //     var lastname = profile.lastname.en;

      //     displayName += toTitleCase(firstname);
      //     displayName += ' ';
      //     displayName += toTitleCase(lastname).charAt(0);
      //     displayName += '.';
      //   }

      //   return displayName;
      // },

      getDisplayedFullName: function (profile) {
        var fullName = '';

        if ((profile !== null) && (profile !== undefined)) {
          var firstname = profile.firstname.th;
          var lastname = profile.lastname.th;

          fullName = firstname + ' ' + lastname;
        }

        return fullName;
      },

      getDisplayedNickname: function (profile) {
        var nickname = '';

        if ((profile !== null) && (profile !== undefined)) {
          nickname = profile.nickname.th;
        }

        return nickname;
      },

      getDisplayedRole: function (profile) {
        var role = '';

        if ((profile !== null) && (profile !== undefined)) {
          role = toTitleCase(profile.role);
        }

        return role;
      }
    };
  });
