'use strict';

describe('Controller: AdminEmployeeInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AdminEmployeeInfoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminEmployeeInfoCtrl = $controller('AdminEmployeeInfoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
