'use strict';

angular.module('pianoforteApp')
  .controller('EmailSettingsCtrl', function ($scope, MenuFactory) {
    $scope.sidebarMenuList = MenuFactory.getSidebarMenu('settings');
  });
