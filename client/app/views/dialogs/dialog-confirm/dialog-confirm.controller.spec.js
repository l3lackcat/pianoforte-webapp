'use strict';

describe('Controller: ConfirmDialogCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var ConfirmDialogCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmDialogCtrl = $controller('ConfirmDialogCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
