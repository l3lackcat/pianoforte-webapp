'use strict';

describe('Controller: AccountAddressCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AccountAddressCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountAddressCtrl = $controller('AccountAddressCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
