'use strict';

describe('Filter: displayedAddressFilter', function () {

  // load the filter's module
  beforeEach(module('pianoforteApp'));

  // initialize a new instance of the filter before each test
  var displayedAddressFilter;
  beforeEach(inject(function ($filter) {
    displayedAddressFilter = $filter('displayedAddressFilter');
  }));

  it('should return the input prefixed with "displayedAddressFilter filter:"', function () {
    var text = 'angularjs';
    expect(displayedAddressFilter(text)).toBe('displayedAddressFilter filter: ' + text);
  });

});
