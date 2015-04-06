'use strict';

angular.module('pianoforteApp')
  .factory('MenuFactory', function (MenuModel) {
    return {
      getNavbarMenu: function (role) {        
        return MenuModel['navbar'][role];
      },

      getSidebarMenu: function (pageName) {
      	return MenuModel['sidebar'][pageName];
      }
    };
  });
