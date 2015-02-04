'use strict';

describe('Controller: AdminBranchMainCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AdminBranchMainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminBranchMainCtrl = $controller('AdminBranchMainCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
