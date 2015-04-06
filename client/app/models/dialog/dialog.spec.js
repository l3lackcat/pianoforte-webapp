'use strict';

describe('Service: DialogModel', function () {

  // load the service's module
  beforeEach(module('pianoforteApp'));

  // instantiate service
  var DialogModel;
  beforeEach(inject(function (_DialogModel_) {
    DialogModel = _DialogModel_;
  }));

  it('should do something', function () {
    expect(!!DialogModel).toBe(true);
  });

});
