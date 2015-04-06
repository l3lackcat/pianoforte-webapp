'use strict';

describe('Controller: PhoneSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var PhoneSettingsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhoneSettingsCtrl = $controller('PhoneSettingsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
