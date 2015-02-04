'use strict';

describe('Service: SidebarMenu', function () {

  // load the service's module
  beforeEach(module('pianoforteApp'));

  // instantiate service
  var SidebarMenu;
  beforeEach(inject(function (_SidebarMenu_) {
    SidebarMenu = _SidebarMenu_;
  }));

  it('should do something', function () {
    expect(!!SidebarMenu).toBe(true);
  });

});
