'use strict';

describe('Controller: AdminEmployeeNewCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AdminEmployeeNewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminEmployeeNewCtrl = $controller('AdminEmployeeNewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
