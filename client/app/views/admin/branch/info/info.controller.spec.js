'use strict';

describe('Controller: AdminBranchInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AdminBranchInfoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminBranchInfoCtrl = $controller('AdminBranchInfoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
