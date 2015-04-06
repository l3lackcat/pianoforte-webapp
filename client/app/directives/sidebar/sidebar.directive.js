'use strict';

angular.module('pianoforteApp')
  .directive('sidebar', function () {
    return {
      templateUrl: 'app/directives/sidebar/sidebar.html',
      restrict: 'EA',
      controller: 'SidebarCtrl',
      scope: {
      	title: '@',
        menuList: '='
      },
      link: function (scope, element, attrs) {
      }
    };
  });