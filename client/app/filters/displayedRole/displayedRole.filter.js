'use strict';

angular.module('pianoforteApp')
  .filter('displayedRoleFilter', function (ProfileFactory) {
    return function (profile) {
      return ProfileFactory.getDisplayedRole(profile);
    };
  });
