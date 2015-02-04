'use strict';

describe('Service: NamingManager', function () {

  // load the service's module
  beforeEach(module('pianoforteApp'));

  // instantiate service
  var NamingManager;
  beforeEach(inject(function (_NamingManager_) {
    NamingManager = _NamingManager_;
  }));

  it('should do something', function () {
    expect(!!NamingManager).toBe(true);
  });

});
