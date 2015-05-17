'use strict';

angular.module('pianoforteApp')
  .factory('DialogModel', function () {
    return {
      'AddressEditor': {
        templateUrl: 'app/views/dialogs/editor-address/editor-address.html',
        controller: 'AddressEditorDialogCtrl',
        backdrop: 'static',
        keyboard: true
      },
      'BranchEditor': {
        templateUrl: 'app/views/dialogs/editor-branch/editor-branch.html',
        controller: 'BranchEditorDialogCtrl',
        backdrop: 'static',
        keyboard: true
      },
      'ConfirmDialog': {
        templateUrl: 'app/views/dialogs/dialog-confirm/dialog-confirm.html',
        controller: 'ConfirmDialogCtrl',
        backdrop: 'static',
        keyboard: true
      },
      'EmailEditor': {
        templateUrl: 'app/views/dialogs/editor-email/editor-email.html',
        controller: 'EmailEditorDialogCtrl',
        backdrop: 'static',
        keyboard: true
      },
      'EnglishProfileEditor': {
        templateUrl: 'app/views/dialogs/editor-profile-en/editor-profile-en.html',
        controller: 'EnglishProfileEditorDialogCtrl',
        backdrop: 'static',
        keyboard: true
      },
      'PhoneEditor': {
        templateUrl: 'app/views/dialogs/editor-phone/editor-phone.html',
        controller: 'PhoneEditorDialogCtrl',
        backdrop: 'static',
        keyboard: true
      },
      'ThaiProfileEditor': {
        templateUrl: 'app/views/dialogs/editor-profile-th/editor-profile-th.html',
        controller: 'ThaiProfileEditorDialogCtrl',
        backdrop: 'static',
        keyboard: true
      }
    };
  });
