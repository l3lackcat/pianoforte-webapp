'use strict';

describe('Filter: displayedNameFilter', function () {

  // load the filter's module
  beforeEach(module('pianoforteApp'));

  // initialize a new instance of the filter before each test
  var displayedNameFilter;
  beforeEach(inject(function ($filter) {
    displayedNameFilter = $filter('displayedNameFilter');
  }));

  it('should return the input prefixed with "displayedNameFilter filter:"', function () {
    var text = 'angularjs';
    expect(displayedNameFilter(text)).toBe('displayedNameFilter filter: ' + text);
  });

});
