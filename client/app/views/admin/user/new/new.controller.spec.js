'use strict';

describe('Controller: AdminUserNewCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AdminUserNewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminUserNewCtrl = $controller('AdminUserNewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
