'use strict';

angular.module('pianoforteApp')
  .controller('ChangePasswordCtrl', function ($scope, MenuFactory) {
    $scope.sidebarMenuList = MenuFactory.getSidebarMenu('settings');
  });
