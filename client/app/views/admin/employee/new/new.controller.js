'use strict';

angular.module('pianoforteApp')
  .controller('AdminEmployeeNewCtrl', function ($scope, $location, Auth, BranchService, EmployeeService) {
    $scope.employee = {};
    $scope.branchList = [];
    $scope.errors = {};
    $scope.employeeRoles = [
      { title: 'ผู้จัดการ', value: 'manager'},
      { title: 'พนักงาน', value: 'employee'}
    ];

    BranchService.findAll().then(function (branchList) {
      $scope.branchList = branchList;
    }).catch( function(err) {
      $scope.branchList = [];
    });

    $scope.create = function (form) {
      $scope.submitted = true;
      $scope.errors = {};

      if (form.$valid) {
        $scope.employee.createdBy = Auth.getCurrentUser()._id;

        EmployeeService.create($scope.employee).then(function () {
          $location.path('/admin/employees');
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

        if ($scope.employee.role === undefined) {
          $scope.errors.role = 'กรุณาเลือกตำแหน่ง';
        }

        if ($scope.employee.branch === undefined) {
          $scope.errors.branch = 'กรุณาเลือกสาขา';
        }
      }
    };

    $scope.onSelectRole = function (selectedRole) {
      $scope.employee.role = selectedRole.value;
    };

    $scope.onSelectBranch = function (selectedBranch) {
      $scope.employee.branch = selectedBranch._id;
    };
  });
