'use strict';

angular.module('pianoforteApp')
  .factory('DialogModel', function () {
    return {
      'EnglishProfileEditor': {
        templateUrl: 'app/views/dialogs/en-profile-editor/en-profile-editor.html',
        controller: 'EnglishProfileEditorDialogCtrl',
        backdrop: 'static',
        keyboard: true
      },
      'ThaiProfileEditor': {
        templateUrl: 'app/views/dialogs/th-profile-editor/th-profile-editor.html',
        controller: 'ThaiProfileEditorDialogCtrl',
        backdrop: 'static',
        keyboard: true
      }
    };
  });
