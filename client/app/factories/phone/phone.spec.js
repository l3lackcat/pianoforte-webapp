'use strict';

describe('Service: PhoneFactory', function () {

  // load the service's module
  beforeEach(module('pianoforteApp'));

  // instantiate service
  var PhoneFactory;
  beforeEach(inject(function (_PhoneFactory_) {
    PhoneFactory = _PhoneFactory_;
  }));

  it('should do something', function () {
    expect(!!PhoneFactory).toBe(true);
  });

});
