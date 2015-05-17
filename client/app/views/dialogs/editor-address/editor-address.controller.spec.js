'use strict';

describe('Controller: AddressEditorDialogCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AddressEditorDialogCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddressEditorDialogCtrl = $controller('AddressEditorDialogCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
