'use strict';

describe('Service: BranchService', function () {

  // load the service's module
  beforeEach(module('pianoforteApp'));

  // instantiate service
  var BranchService;
  beforeEach(inject(function (_BranchService_) {
    BranchService = _BranchService_;
  }));

  it('should do something', function () {
    expect(!!BranchService).toBe(true);
  });

});
