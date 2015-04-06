'use strict';

angular.module('pianoforteApp')
  .filter('displayedFullNameFilter', function (ProfileFactory) {
    return function (profile) {
      return ProfileFactory.getDisplayedFullName(profile);
    };
  });
