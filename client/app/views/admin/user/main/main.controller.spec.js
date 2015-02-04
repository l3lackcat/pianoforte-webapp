'use strict';

describe('Controller: AdminUserMainCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AdminUserMainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminUserMainCtrl = $controller('AdminUserMainCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
