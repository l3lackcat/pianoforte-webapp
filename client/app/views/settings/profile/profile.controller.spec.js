'use strict';

describe('Controller: ProfileSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var ProfileSettingsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfileSettingsCtrl = $controller('ProfileSettingsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
