'use strict';

angular.module('pianoforteApp')
  .filter('displayedNicknameFilter', function (ProfileFactory) {
    return function (profile) {
      return ProfileFactory.getDisplayedNickname(profile);
    };
  });
