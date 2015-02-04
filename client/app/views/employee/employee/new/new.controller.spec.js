'use strict';

describe('Controller: EmployeeNewCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var EmployeeNewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmployeeNewCtrl = $controller('EmployeeNewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
