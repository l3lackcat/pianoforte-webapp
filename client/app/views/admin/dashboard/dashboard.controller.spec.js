'use strict';

describe('Controller: AdminDashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AdminDashboardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminDashboardCtrl = $controller('AdminDashboardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
