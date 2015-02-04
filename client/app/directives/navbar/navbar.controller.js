'use strict';

angular.module('pianoforteApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, NamingManager) {
    $scope.currentUser = Auth.getCurrentUser();

    $scope.logout = function () {
      Auth.logout();
      $location.path('/login');
    };
  });
