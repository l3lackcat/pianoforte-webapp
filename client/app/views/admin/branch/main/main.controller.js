'use strict';

angular.module('pianoforteApp')
  .controller('AdminBranchMainCtrl', function ($scope, $modal, ngTableParams, DialogFactory, BranchService) {
    $scope.branchList = [];
    $scope.currentPage = 1;
    $scope.countPerPage = 10;

    $scope.openBranchEditor = function (index) {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('BranchEditor');

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          branch: function () {
            var branch = {};
            var tempBranch = angular.copy($scope.branchList[index]);

            if (tempBranch === undefined) {
              branch = {
                name: ''
              };
            } else {
              branch = {
                index: index,
                name: tempBranch.name
              };
            }

            return branch;
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then(function (branch) {
          if (branch.index === undefined) {
            // TODO
          } else {
            // TODO
          }

          $scope.updatePhones(tempProfile);
        }, function () {
          // Do Nothing
        });
      }
    };

    $scope.reload = function () {
      BranchService.findAll().then(function (branchList) {
        $scope.branchList = branchList;

        $scope.tableParams = new ngTableParams({
          page: $scope.currentPage,         // show first page
          total: $scope.branchList.length,  // length of data
          count: $scope.countPerPage        // count per page
        }, {
          counts: []
        });
      }).catch( function(err) {
        $scope.branchList = [];
      });
    };

    $scope.branchList = $scope.reload();
  });
