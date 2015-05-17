'use strict';

describe('Service: DialogFactory', function () {

  // load the service's module
  beforeEach(module('pianoforteApp'));

  // instantiate service
  var DialogFactory;
  beforeEach(inject(function (_DialogFactory_) {
    DialogFactory = _DialogFactory_;
  }));

  it('should do something', function () {
    expect(!!DialogFactory).toBe(true);
  });

});
