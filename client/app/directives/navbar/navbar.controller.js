'use strict';

angular.module('pianoforteApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, MenuFactory) {
    $scope.currentUser = Auth.getCurrentUser();
    $scope.currentUserProfile = Auth.getCurrentUserProfile();
    $scope.menuList = MenuFactory.getNavbarMenu($scope.currentUserProfile['role']);
    
    $scope.logout = function () {
      Auth.logout();
      $location.path('/login');
    };
  });
