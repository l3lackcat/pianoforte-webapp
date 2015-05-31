'use strict';

angular.module('pianoforteApp')
  .controller('AdminBranchMainCtrl', function ($scope, $location, $modal, ngTableParams, DialogFactory, BranchService) {
    $scope.branchList = [];
    $scope.currentPage = 1;
    $scope.countPerPage = 10;

    $scope.openAddressEditor = function (branchIndex) {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('AddressEditor');
      var tempBranch = angular.copy($scope.branchList[branchIndex]);

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          address: function () {
            var address = {};
            var tempAddress = angular.copy(tempBranch.address);

            if (tempAddress === undefined) {
              address = {
                buildingName: '',
                streetAddress: '',
                subDistrict: '',
                district: '',
                province: '',
                country: 'ไทย',
                postcode: ''
              };
            } else {
              address = {
                buildingName: tempAddress.buildingName || '',
                streetAddress: tempAddress.streetAddress || '',
                subDistrict: tempAddress.subDistrict || '',
                district: tempAddress.district || '',
                province: tempAddress.province || '',
                country: tempAddress.country || 'ไทย',
                postcode: tempAddress.postcode || ''
              };
            }

            return address;
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then(function (address) {
          tempBranch.address = angular.copy(address);
          $scope.updateBranch(tempBranch);
        }, function () {
          // Do Nothing
        });
      }
    };

    $scope.openBranchEditor = function (index) {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('BranchEditor');

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          branch: function () {
            return {
              name: '',
              contacts: {
                phones: [],
                emails: []
              },
              address: {}
            };
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then(function (branch) {
          console.log(branch);
          BranchService.create(branch).then(function () {
            $location.path('/admin/branches');
          }).catch( function(err) {
            $scope.errors.message = err.message;
          });
          // $scope.updatePhones(tempProfile);
        }, function () {
          // Do Nothing
        });
      }
    };

    $scope.openBranchNameEditor = function (branchIndex) {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('InputDialog');
      var tempBranch = angular.copy($scope.branchList[branchIndex]);

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          properties: function () {
            var properties = {
              title: 'Branch Name Editor',
              label: 'Branch Name',
              placeholder: 'Branch Name',
              value: tempBranch.name || '',
              isRequired: true,
            };

            return properties;
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then(function (properties) {
          tempBranch.name = properties.value;

          console.log(tempBranch);

          $scope.updateBranch(tempBranch);
        }, function () {
          // Do Nothing
        });
      }
    };

    $scope.openEmailEditor = function (branchIndex, emailIndex) {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('InputDialog');
      var tempBranch = angular.copy($scope.branchList[branchIndex]);

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          properties: function () {
            var tempEmail = angular.copy(tempBranch.contacts.emails[emailIndex]);
            var properties = {
              index: emailIndex,
              title: 'Email Editor',
              label: 'Email',
              placeholder: 'Ex. name@mail.com',
              value: '',
              isRequired: true,
            };

            if (tempEmail !== undefined) {
              properties.value = tempEmail.value || '';
            }

            return properties;
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then(function (properties) {
          tempBranch.contacts.emails[properties.index] = {
            label: properties.label,
            value: properties.value,
            primary: properties.primary
          };

          console.log(tempBranch);

          $scope.updateBranch(tempBranch);
        }, function () {
          // Do Nothing
        });
      }
    };

    $scope.openPhoneEditor = function (branchIndex, phoneIndex) {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('InputDialog');
      var tempBranch = angular.copy($scope.branchList[branchIndex]);

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          properties: function () {
            var tempPhone = angular.copy(tempBranch.contacts.phones[phoneIndex]);
            var properties = {
              index: phoneIndex,
              title: 'Phone Editor',
              label: 'Phone',
              placeholder: 'Ex. 02-999-9999',
              value: '',
              isRequired: true,
              primary: true
            };

            if (phoneIndex === 1) {
              properties.label = 'Mobile';
              properties.placeholder = 'Ex. 089-999-9999';
              properties.primary = false;
            }

            if (tempPhone !== undefined) {
              properties.value = tempPhone.value || '';
            }

            return properties;
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then(function (properties) {
          tempBranch.contacts.phones[properties.index] = {
            label: properties.label,
            value: properties.value.replace(/-/g , ''),
            primary: properties.primary
          };

          console.log(tempBranch);

          $scope.updateBranch(tempBranch);
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

    $scope.updateBranch = function (branch) {
      BranchService.update(branch).then(function (branch) {
        // for (var i = $scope.branchList.length - 1; i >= 0; i--) {
        //   if ($scope.branchList[i]._id === branch._id) {
        //     $scope.branchList[i] = angular.copy(branch);
        //   }
        // };
        $scope.branchList = $scope.reload();
      }).catch(function (err) {
        // TODO
      });
    };

    $scope.branchList = $scope.reload();
  });
