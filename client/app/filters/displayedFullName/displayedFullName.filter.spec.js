'use strict';

describe('Filter: displayedFullNameFilter', function () {

  // load the filter's module
  beforeEach(module('pianoforteApp'));

  // initialize a new instance of the filter before each test
  var displayedFullNameFilter;
  beforeEach(inject(function ($filter) {
    displayedFullNameFilter = $filter('displayedFullNameFilter');
  }));

  it('should return the input prefixed with "displayedFullNameFilter filter:"', function () {
    var text = 'angularjs';
    expect(displayedFullNameFilter(text)).toBe('displayedFullNameFilter filter: ' + text);
  });

});
