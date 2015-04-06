'use strict';

describe('Controller: AddressSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AddressSettingsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddressSettingsCtrl = $controller('AddressSettingsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
