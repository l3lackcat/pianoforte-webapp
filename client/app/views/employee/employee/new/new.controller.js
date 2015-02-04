'use strict';

angular.module('pianoforteApp')
  .controller('EmployeeNewCtrl', function ($scope, $location, Auth, BranchService, EmployeeService) {
    $scope.employee = {};
    $scope.errors = {};

    $scope.create = function (form) {
      $scope.submitted = true;
      $scope.errors = {};

      if (form.$valid) {
        var currentUser = Auth.getCurrentUser();

        $scope.employee.branch = currentUser.branch;
        $scope.employee.createdBy = currentUser._id;
        $scope.employee.role = 'employee';

        EmployeeService.create($scope.employee).then(function () {
          $location.path('/employees');
        }).catch( function(err) {
          // TODO
        });
      } else {
        if (form.firstnameEn.$error.required === true) {
          $scope.errors.firstnameEn = 'กรุณากรอกชื่อจริงภาษาอังกฤษ';
        }

        if (form.lastnameEn.$error.required === true) {
          $scope.errors.lastnameEn = 'กรุณากรอกนามสกุลภาษาอังกฤษ';
        }

        if (form.nicknameEn.$error.required === true) {
          $scope.errors.nicknameEn = 'กรุณากรอกชื่อเล่นภาษาอังกฤษ';
        }

        if (form.firstnameTh.$error.required === true) {
          $scope.errors.firstnameTh = 'กรุณากรอกชื่อจริง';
        }

        if (form.lastnameTh.$error.required === true) {
          $scope.errors.lastnameTh = 'กรุณากรอกนามสกุล';
        }

        if (form.nicknameTh.$error.required === true) {
          $scope.errors.nicknameTh = 'กรุณากรอกชื่อเล่น';
        }
      }
    };
  });
