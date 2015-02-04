'use strict';

describe('Controller: AccountSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AccountSettingsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountSettingsCtrl = $controller('AccountSettingsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
