'use strict';

angular.module('pianoforteApp')
  .controller('EmployeeMainCtrl', function ($scope, $location, ngTableParams, Auth, EmployeeService) {
    var currentUserProfile = Auth.getCurrentUserProfile();
    
  	$scope.employeeList = [];
    $scope.settings = {
      columns: {
        name: {
          text: 'Name',
          visible: true
        },
        nickname: {
          text: 'Nickname',
          visible: true
        },
        displayedName: {
          text: 'Displayed name',
          visible: true
        },
        role: {
          text: 'Role',
          visible: true
        }
      }
    };

    EmployeeService.findAllByBranch(currentUserProfile.branch).then(function (employeeList) {
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
