'use strict';

describe('Controller: AdminBranchNewCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AdminBranchNewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminBranchNewCtrl = $controller('AdminBranchNewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
