'use strict';

angular.module('pianoforteApp')
  .controller('EmployeeMainCtrl', function ($scope, $location, ngTableParams, Auth, EmployeeService) {
    var currentUser = Auth.getCurrentUser();
  	$scope.employeeList = [];

    EmployeeService.findAllByBranch(currentUser.branch).then(function (employeeList) {
      $scope.employeeList = employeeList;

      $scope.tableParams = new ngTableParams({
        page: 1,
        total: employeeList.length,
        count: 10
      }, {
        counts: []
      });
    }).catch( function(err) {
      $scope.employeeList = [];
    });
  });
