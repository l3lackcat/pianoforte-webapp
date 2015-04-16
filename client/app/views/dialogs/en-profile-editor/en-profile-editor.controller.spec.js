'use strict';

describe('Controller: EnglishProfileEditorDialogCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var EnglishProfileEditorDialogCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnglishProfileEditorDialogCtrl = $controller('EnglishProfileEditorDialogCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
