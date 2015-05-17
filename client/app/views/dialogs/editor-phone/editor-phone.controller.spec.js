'use strict';

describe('Controller: PhoneEditorDialogCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var PhoneEditorDialogCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhoneEditorDialogCtrl = $controller('PhoneEditorDialogCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
