'use strict';

angular.module('pianoforteApp')
  .factory('EmployeeService', function ($http, $q, Auth) {
    var url = '/api/employees';
    
    return {
      create: function (employee, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();
        
        $http.post('/api/employees', employee).success(function (data) {
          deferred.resolve(data);
          return cb();
        }).error(function (err) {
          deferred.reject(err);
          return cb(err);
        }.bind(this));

        return deferred.promise;
      },

      update: function (employee, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();

        $http.post('/api/employees/update', employee).success(function (data) {
          deferred.resolve(data);
          return cb();
        }).error(function (err) {
          deferred.reject(err);
          return cb(err);
        }.bind(this));

        return deferred.promise;
      },

      findAll: function (callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();

        $http.get('/api/employees/findAll').success(function (employeeList) {
          deferred.resolve(employeeList);
          return cb();
        }).error(function (err) {
          deferred.reject(err);
          return cb(err);
        }.bind(this));

        return deferred.promise;
      },

      findAllByBranch: function (branchObjectId, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();
        var data = {
          branch: branchObjectId
        };
        
        $http.post('/api/employees/findAllByBranch', data).success(function (employeeList) {
          deferred.resolve(employeeList);
          return cb();
        }).error(function (err) {
          deferred.reject(err);
          return cb(err);
        }.bind(this));

        return deferred.promise;
      },

      findOneByUser: function (userObjectId, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();
        var data = {
          user: userObjectId
        };
        
        $http.post('/api/employees/findOneByUser', data).success(function (employee) {
          deferred.resolve(employee);
          return cb();
        }).error(function (err) {
          deferred.reject(err);
          return cb(err);
        }.bind(this));

        return deferred.promise;
      }
    };
  });
