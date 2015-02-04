'use strict';

angular.module('pianoforteApp')
  .controller('SidebarCtrl', function ($scope, $location, SidebarMenu) {
    $scope.menu = SidebarMenu.getMenu();

    $scope.isActive = function (route) {
      var isActive = false;

      if ($location.path().indexOf(route) !== -1) {
        isActive = true;
      }

      return isActive;
    };
  });
