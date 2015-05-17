'use strict';

describe('Service: AddressModel', function () {

  // load the service's module
  beforeEach(module('pianoforteApp'));

  // instantiate service
  var AddressModel;
  beforeEach(inject(function (_AddressModel_) {
    AddressModel = _AddressModel_;
  }));

  it('should do something', function () {
    expect(!!AddressModel).toBe(true);
  });

});
