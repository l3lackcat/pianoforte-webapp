'use strict';

describe('Filter: displayName', function () {

  // load the filter's module
  beforeEach(module('pianoforteApp'));

  // initialize a new instance of the filter before each test
  var displayName;
  beforeEach(inject(function ($filter) {
    displayName = $filter('displayName');
  }));

  it('should return the input prefixed with "displayName filter:"', function () {
    var text = 'angularjs';
    expect(displayName(text)).toBe('displayName filter: ' + text);
  });

});
