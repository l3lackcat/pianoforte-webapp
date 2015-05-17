'use strict';

describe('Filter: displayedPhoneFilter', function () {

  // load the filter's module
  beforeEach(module('pianoforteApp'));

  // initialize a new instance of the filter before each test
  var displayedPhoneFilter;
  beforeEach(inject(function ($filter) {
    displayedPhoneFilter = $filter('displayedPhoneFilter');
  }));

  it('should return the input prefixed with "displayedPhoneFilter filter:"', function () {
    var text = 'angularjs';
    expect(displayedPhoneFilter(text)).toBe('displayedPhoneFilter filter: ' + text);
  });

});
