'use strict';

angular.module('pianoforteApp')
  .factory('DialogFactory', function (DialogModel) {
    return {
      getDialogOptions: function (dialogName) {        
        return DialogModel[dialogName];
      }
    };
  });
