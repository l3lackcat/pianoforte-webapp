'use strict';

describe('Controller: AdminEmployeeMainCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AdminEmployeeMainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminEmployeeMainCtrl = $controller('AdminEmployeeMainCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
