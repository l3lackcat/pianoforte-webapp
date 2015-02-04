'use strict';

angular.module('pianoforteApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'app/directives/navbar/navbar.html',
      restrict: 'EA',
      controller: 'NavbarCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });