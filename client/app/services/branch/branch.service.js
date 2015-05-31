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
      },

      update: function (branch, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();
        var url = '/api/branches/update/' + branch._id;

        if (branch.manager !== undefined) {
          branch.manager = branch.manager._id || null;
        }
        
        if (branch.createdBy !== undefined) {
          branch.createdBy = branch.createdBy._id || null;
        }

        branch.edittedBy = Auth.getCurrentUser()._id;
        branch.edittedDate = moment();

        $http.post(url, branch).success(function (data) {
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
