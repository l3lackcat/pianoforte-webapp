'use strict';

describe('Controller: AdminUserInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AdminUserInfoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminUserInfoCtrl = $controller('AdminUserInfoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
