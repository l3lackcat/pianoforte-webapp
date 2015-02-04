'use strict';

describe('Controller: AccountProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AccountProfileCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountProfileCtrl = $controller('AccountProfileCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
