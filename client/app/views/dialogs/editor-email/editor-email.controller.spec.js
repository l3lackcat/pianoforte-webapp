'use strict';

describe('Controller: EmailEditorDialogCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var EmailEditorDialogCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmailEditorDialogCtrl = $controller('EmailEditorDialogCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
