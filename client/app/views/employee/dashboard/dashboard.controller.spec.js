'use strict';

describe('Controller: EmployeeDashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var EmployeeDashboardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmployeeDashboardCtrl = $controller('EmployeeDashboardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
