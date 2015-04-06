'use strict';

angular.module('pianoforteApp')
  .controller('SidebarCtrl', function ($scope, $location) {
    $scope.isActive = function (route) {
      var isActive = false;

      if ($location.path().indexOf(route) !== -1) {
        isActive = true;
      }

      return isActive;
    };
  });
