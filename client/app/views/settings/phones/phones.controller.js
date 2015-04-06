'use strict';

angular.module('pianoforteApp')
  .controller('PhoneSettingsCtrl', function ($scope, MenuFactory) {
    $scope.sidebarMenuList = MenuFactory.getSidebarMenu('settings');
  });
