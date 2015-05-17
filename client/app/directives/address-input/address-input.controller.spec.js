'use strict';

describe('Controller: AddressInputCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AddressInputCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddressInputCtrl = $controller('AddressInputCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
