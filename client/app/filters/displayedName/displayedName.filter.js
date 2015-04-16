'use strict';

angular.module('pianoforteApp')
  .filter('displayedNameFilter', function (ProfileFactory) {
    return function (profile) {
      // return ProfileFactory.getDisplayedName(profile);
      return profile.displayedName;
    };
  });
