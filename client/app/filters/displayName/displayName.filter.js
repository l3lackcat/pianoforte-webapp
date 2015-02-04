'use strict';

angular.module('pianoforteApp')
  .filter('displayName', function (NamingManager) {
    return function (user) {
      var displayName = '';
      var profile = user.profile;

      if (profile === undefined) {
        profile = user
      } else {
        if (user.profile.employee !== undefined) {
          profile = user.profile.employee;
        } else if (user.profile.teacher !== undefined) {
          profile = user.profile.teacher;
        }
      }

      if (profile !== null) {
        var firstname = profile.firstname.en;
        var lastname = profile.lastname.en;

        displayName = NamingManager.getDisplayName(firstname, lastname);
      }

      return displayName;
    };
  });
