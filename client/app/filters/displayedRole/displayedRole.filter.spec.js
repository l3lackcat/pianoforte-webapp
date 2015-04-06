'use strict';

describe('Filter: displayedRoleFilter', function () {

  // load the filter's module
  beforeEach(module('pianoforteApp'));

  // initialize a new instance of the filter before each test
  var displayedRoleFilter;
  beforeEach(inject(function ($filter) {
    displayedRoleFilter = $filter('displayedRoleFilter');
  }));

  it('should return the input prefixed with "displayedRoleFilter filter:"', function () {
    var text = 'angularjs';
    expect(displayedRoleFilter(text)).toBe('displayedRoleFilter filter: ' + text);
  });

});
