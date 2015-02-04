'use strict';

describe('Controller: EmployeeInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var EmployeeInfoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmployeeInfoCtrl = $controller('EmployeeInfoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
