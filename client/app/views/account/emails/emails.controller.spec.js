'use strict';

describe('Controller: AccountEmailsCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var AccountEmailsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountEmailsCtrl = $controller('AccountEmailsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
