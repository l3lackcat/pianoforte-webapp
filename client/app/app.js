'use strict';

angular.module('pianoforteApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'pascalprecht.translate',
  'ngTable',
  'ui.select'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider, $translateProvider, datepickerConfig, uiSelectConfig) {
    $routeProvider
      .otherwise({
        redirectTo: '/dashboard',
        roles: ['employee', 'manager']
      });

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');

    $translateProvider.useStaticFilesLoader({
      prefix: 'app/localization/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');

    uiSelectConfig.theme = 'bootstrap';
    datepickerConfig.showWeeks = false;
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function (response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function (loggedIn) {
        if (loggedIn === false) {
          $location.path('/login');
        } else {
          var user = Auth.getCurrentUser();
          var role = user.role;

          if (next.roles.indexOf(role) === -1) {
            if (role === 'admin') {
              $location.path('/admin/dashboard');
            } else if (role === 'manager') {
              $location.path('/dashboard');
            } else if (role === 'employee') {
              $location.path('/dashboard');
            } else if (role === 'teacher') {
              // TODO
            } else if (role === 'student') {
              // TODO
            }
          }
        }
      });
    });
  });