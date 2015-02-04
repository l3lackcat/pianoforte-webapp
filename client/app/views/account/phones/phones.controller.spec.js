'use strict';

describe('Controller: AccountPhonesCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AccountPhonesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountPhonesCtrl = $controller('AccountPhonesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
