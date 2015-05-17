'use strict';

describe('Directive: addressInput', function () {

  // load the directive's module and view
  beforeEach(module('pianoforteApp'));
  beforeEach(module('app/directives/address-input/address-input.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<address-input></address-input>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the addressInput directive');
  }));
});