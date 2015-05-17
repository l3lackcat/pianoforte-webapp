'use strict';

angular.module('pianoforteApp')
  .controller('EmailSettingsCtrl', function ($scope, $modal, Auth, DialogFactory, MenuFactory, EmployeeService) {
    $scope.sidebarMenuList = MenuFactory.getSidebarMenu('settings');
    $scope.profile = Auth.getCurrentUserProfile();
    $scope.isEditMode = false;

    $scope.updateEmails = function (profile) {
      EmployeeService.update(profile).then(function (profile) {
        $scope.profile = angular.copy(profile);
        Auth.updateCurrentUserProfile(profile);
      }).catch(function (err) {
        // TODO
      });
    };

    $scope.openEmailEditor = function (index) {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('EmailEditor');
      var tempProfile = angular.copy($scope.profile);

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          email: function () {
            var email = {};
            var tempEmail = angular.copy(tempProfile.contacts.emails[index]);

            if (tempEmail === undefined) {
              email = {
                label: '',
                value: '',
                primary: false
              };
            } else {
              email = {
                index: index,
                label: tempEmail.label || '',
                value: tempEmail.value || '',
                primary: tempEmail.primary || false
              };
            }

            return email;
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then(function (email) {
        	var isSetPrimaryNumber = false;

          if (email.primary === true) {
            isSetPrimaryNumber = true;

            for (var i = tempProfile.contacts.emails.length - 1; i >= 0; i--) {
              if (i !== index) {
                tempProfile.contacts.emails[i].primary = false;
              }
            }
          } else {
            for (var i = tempProfile.contacts.emails.length - 1; i >= 0; i--) {
              if (i !== index) {
                if (tempProfile.contacts.emails[i].primary === true) {
                  isSetPrimaryNumber = true;
                  break;
                }
              }
            }
          }

          if (email.index === undefined) {
            tempProfile.contacts.emails.push(email);
          } else {
            tempProfile.contacts.emails[index] = angular.copy(email);
          }

          if (isSetPrimaryNumber === false) {
            tempProfile.contacts.emails[0].primary = true;
          }

          $scope.updateEmails(tempProfile);
        }, function () {
          // Do Nothing
        });
      }
    };

    $scope.removeEmail = function (index) {
      var modalInstance = null;
      var dialogOptions = DialogFactory.getDialogOptions('ConfirmDialog');
      var tempProfile = angular.copy($scope.profile);

      if (dialogOptions !== undefined) {
        dialogOptions.resolve = {
          text: function () {
            var email = angular.copy(tempProfile.contacts.emails[index]);

            return 'คุณต้องการลบหมายเลข ' + email.value + ' ใช่หรือไม่?';
          }
        };

        modalInstance = $modal.open(dialogOptions);
        modalInstance.result.then(function () {
          var email = tempProfile.contacts.emails[index];

          if (email !== undefined) {
            if (email.primary === true) {
              if (index > 0) {
                tempProfile.contacts.emails[0].primary = true;
              } else {
                if (tempProfile.contacts.emails.length > 1) {
                  tempProfile.contacts.emails[1].primary = true;
                }
              }
            }

            tempProfile.contacts.emails.splice(index, 1);
            $scope.updateEmails(tempProfile);
          }
        }, function () {
          // Do Nothing
        });
      }
    };

    $scope.setPrimary = function (index) {
      var tempProfile = angular.copy($scope.profile);

      for (var i = tempProfile.contacts.emails.length - 1; i >= 0; i--) {
        if (i === index) {
          tempProfile.contacts.emails[i].primary = true;
        } else {
          tempProfile.contacts.emails[i].primary = false;
        }
      }

      $scope.updateEmails(tempProfile);
    };
  });
