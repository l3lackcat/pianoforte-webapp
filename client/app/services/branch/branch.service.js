'use strict';

angular.module('pianoforteApp')
  .factory('BranchService', function ($http, $q, Auth) {
    // Public API here
    return {
      findAll: function (callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();

        $http.get('/api/branches/findAll').success(function (branchList) {
          deferred.resolve(branchList);
          return cb();
        }).error(function (err) {
          deferred.reject(err);
          return cb(err);
        }.bind(this));

        return deferred.promise;
      },

      create: function (branch, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();

        branch.createdBy = Auth.getCurrentUser()._id;

        $http.post('/api/branches', branch).success(function (data) {
          deferred.resolve(data);
          return cb();
        }).error(function (err) {
          deferred.reject(err);
          return cb(err);
        }.bind(this));

        return deferred.promise;
      }
    };
  });
