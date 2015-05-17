'use strict';

angular.module('pianoforteApp')
  .factory('AddressFactory', function (AddressModel) {
    return {
      getSubDistrictList: function (subDistrict) {
        var subDistrictList = [];

        _.forEach(AddressModel, function(n, key) {
          if (key.indexOf(subDistrict) > -1) {
            var tempSubDistrictList = AddressModel[key]

            for (var i = tempSubDistrictList.length - 1; i >= 0; i--) {
              subDistrictList.push(tempSubDistrictList[i]);
            }
          }
        });

        return subDistrictList;
      }
    };
  });
