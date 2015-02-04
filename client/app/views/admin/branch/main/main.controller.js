'use strict';

angular.module('pianoforteApp')
  .controller('AdminBranchMainCtrl', function ($scope, $location, ngTableParams, BranchService) {
    $scope.branchList = [];

    BranchService.findAll().then(function (branchList) {
      $scope.branchList = branchList;

      $scope.tableParams = new ngTableParams({
        page: 1,                  // show first page
        total: branchList.length, // length of data
        count: 10                 // count per page
      }, {
        counts: []
      });
    }).catch( function(err) {
      $scope.branchList = [];
    });
  });
