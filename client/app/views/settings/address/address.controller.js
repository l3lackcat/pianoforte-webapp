'use strict';

angular.module('pianoforteApp')
  .controller('AddressSettingsCtrl', function ($scope, MenuFactory) {
    $scope.sidebarMenuList = MenuFactory.getSidebarMenu('settings');
  });
