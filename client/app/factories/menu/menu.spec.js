'use strict';

describe('Service: MenuFactory', function () {

  // load the service's module
  beforeEach(module('pianoforteApp'));

  // instantiate service
  var MenuFactory;
  beforeEach(inject(function (_MenuFactory_) {
    MenuFactory = _MenuFactory_;
  }));

  it('should do something', function () {
    expect(!!MenuFactory).toBe(true);
  });

});
