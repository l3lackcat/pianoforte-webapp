'use strict';

describe('Service: MenuModel', function () {

  // load the service's module
  beforeEach(module('pianoforteApp'));

  // instantiate service
  var MenuModel;
  beforeEach(inject(function (_MenuModel_) {
    MenuModel = _MenuModel_;
  }));

  it('should do something', function () {
    expect(!!MenuModel).toBe(true);
  });

});
