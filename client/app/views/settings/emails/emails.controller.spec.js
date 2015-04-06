'use strict';

describe('Controller: EmailSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var EmailSettingsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmailSettingsCtrl = $controller('EmailSettingsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
