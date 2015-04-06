'use strict';

describe('Filter: displayedNicknameFilter', function () {

  // load the filter's module
  beforeEach(module('pianoforteApp'));

  // initialize a new instance of the filter before each test
  var displayedNicknameFilter;
  beforeEach(inject(function ($filter) {
    displayedNicknameFilter = $filter('displayedNicknameFilter');
  }));

  it('should return the input prefixed with "displayedNicknameFilter filter:"', function () {
    var text = 'angularjs';
    expect(displayedNicknameFilter(text)).toBe('displayedNicknameFilter filter: ' + text);
  });

});
