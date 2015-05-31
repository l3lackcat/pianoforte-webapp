'use strict';

describe('Controller: InputDialogCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var InputDialogCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InputDialogCtrl = $controller('InputDialogCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
