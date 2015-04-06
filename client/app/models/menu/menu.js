'use strict';

angular.module('pianoforteApp')
  .factory('MenuModel', function () {
    return {
      navbar: {
        admin: [{
          title: 'Dashboard',
          link: '/admin/dashboard'
        }, {
          title: 'Branches',
          link: '/admin/branches'
        }, {
          title: 'Users',
          link: '/admin/users'
        }, {
          title: 'Employees',
          link: '/admin/employees'
        }],
        manager: [{
          title: 'Dashboard',
          link: '/dashboard'
        }, {
          title: 'Employees',
          link: '/employees'
        }, {
          title: 'Students',
          link: '/students'
        }, {
          title: 'Teachers',
          link: '/teachers'
        }],
        employee: [{
          title: 'Dashboard',
          link: '/dashboard'
        }, {
          title: 'Students',
          link: '/students'
        }, {
          title: 'Teachers',
          link: '/teachers'
        }]
      },
      sidebar: {
        settings: [{
          title: 'Profile',
          link: '/settings/profile',
          activePath: '/settings/profile'
        }, {
          title: 'Phones',
          link: '/settings/phones',
          activePath: '/settings/phones'
        }, {
          title: 'Emails',
          link: '/settings/emails',
          activePath: '/settings/emails'
        }, {
          title: 'Address',
          link: '/settings/address',
          activePath: '/settings/address'
        }, {
          title: 'Change password',
          link: '/settings/change-password',
          activePath: '/settings/change-password'
        }]
      }
    };
  });
