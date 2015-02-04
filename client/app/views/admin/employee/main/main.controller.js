'use strict';

angular.module('pianoforteApp')
  .controller('AdminEmployeeMainCtrl', function ($scope, $location, ngTableParams, EmployeeService) {
  	$scope.employeeList = [];

    EmployeeService.findAll().then(function (employeeList) {
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
