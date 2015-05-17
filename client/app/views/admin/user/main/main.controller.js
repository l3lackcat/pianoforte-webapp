'use strict';

angular.module('pianoforteApp')
  .controller('AdminUserMainCtrl', function ($scope, $location, ngTableParams, User) {
    $scope.userList = [];
    $scope.userList = User.query();

    $scope.$watch('userList', function (newValue, oldValue) {
      angular.forEach($scope.userList, function (user) {
        if (user.employeeProfile !== undefined) {
          user.profile = angular.copy(user.employeeProfile);
          delete user.employeeProfile;
        } else if (user.teacherProfile !== undefined) {
          user.profile = angular.copy(user.teacherProfile);
          delete user.teacherProfile;
        }
      });

      $scope.tableParams = new ngTableParams({
        page: 1,
        total: $scope.userList.length,
        count: 10
      }, {
        counts: []
      });
    });
  });
