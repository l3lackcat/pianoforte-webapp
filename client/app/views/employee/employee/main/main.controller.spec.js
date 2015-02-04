'use strict';

describe('Controller: EmployeeMainCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var EmployeeMainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmployeeMainCtrl = $controller('EmployeeMainCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
