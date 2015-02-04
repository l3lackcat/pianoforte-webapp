'use strict';

angular.module('pianoforteApp')
  .factory('SidebarMenu', function ($location, Auth) {
    var menuList = {
      admin: {
        main: {
          title: 'Menu',
          items: [{
            title: 'Dashboard',
            link: '/admin/dashboard',
            activePath: '/admin/dashboard'
          }, {
            title: 'Branches',
            link: '/admin/branches',
            activePath: '/admin/branches'
          }, {
            title: 'Users',
            link: '/admin/users',
            activePath: '/admin/users'
          }, {
            title: 'Employees',
            link: '/admin/employees',
            activePath: '/admin/employees'
          }]
        },
        account: {
          title: 'Account',
          items: [{
            title: 'Settings',
            link: '/account/settings',
            activePath: '/account/settings'
          }]
        }
      },

      manager: {
        main: {
          title: 'Main menu',
          items: [{
            title: 'Dashboard',
            link: '/dashboard',
            activePath: '/dashboard'
          }, {
            title: 'Employees',
            link: '/employees',
            activePath: '/employees'
          }, {
            title: 'Students',
            link: '/students',
            activePath: '/students'
          }, {
            title: 'Teachers',
            link: '/teachers',
            activePath: '/teachers'
          }]
        }, account: {
          title: 'Account',
          items: [{
            title: 'Profile',
            link: '/account/profile',
            activePath: '/account/profile'
          }, {
            title: 'Settings',
            link: '/account/settings',
            activePath: '/account/settings'
          }, {
            title: 'Phones',
            link: '/account/phones',
            activePath: '/account/phones'
          }, {
            title: 'Emails',
            link: '/account/emails',
            activePath: '/account/emails'
          }, {
            title: 'Address',
            link: '/account/address',
            activePath: '/account/address'
          }]
        }
      },

      employee: {
        main: {
          title: 'Main menu',
          items: [{
            title: 'Dashboard',
            link: '/dashboard',
            activePath: '/dashboard'
          }, {
            title: 'Students',
            link: '/students',
            activePath: '/students'
          }, {
            title: 'Teachers',
            link: '/teachers',
            activePath: '/teachers'
          }]
        }, account: {
          title: 'Account',
          items: [{
            title: 'Profile',
            link: '/account/profile',
            activePath: '/account/profile'
          }, {
            title: 'Settings',
            link: '/account/settings',
            activePath: '/account/settings'
          }, {
            title: 'Phones',
            link: '/account/phones',
            activePath: '/account/phones'
          }, {
            title: 'Emails',
            link: '/account/emails',
            activePath: '/account/emails'
          }, {
            title: 'Address',
            link: '/account/address',
            activePath: '/account/address'
          }]
        }
      }
    };

    // Public API here
    return {
      getMenu: function () {
        var user = Auth.getCurrentUser();
        var role = user.role;
        var type = this.getMenuType($location.path());
        
        return menuList[role][type];
      },

      getMenuType: function (currentPath) {
        var menuType = 'main';

        if (currentPath.indexOf('account') !== -1) {
          menuType = 'account';
        }

        return menuType;
      }
    };
  });
