'use strict';

describe('Controller: EmployeeCreationCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var EmployeeCreationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmployeeCreationCtrl = $controller('EmployeeCreationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
