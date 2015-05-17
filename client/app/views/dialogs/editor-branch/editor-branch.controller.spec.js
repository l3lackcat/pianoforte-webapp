'use strict';

describe('Controller: BranchEditorDialogCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var BranchEditorDialogCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BranchEditorDialogCtrl = $controller('BranchEditorDialogCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
