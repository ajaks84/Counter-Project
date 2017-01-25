(function () {
'use strict';

angular.module('Data')
.service('DataService', DataService);

DataService.$inject = ['$http']
function DataService($http) {
  var service = this;

  service.getLines = function () {
          return $http.get('data/grodno.lines.json')
                      .then(function (result) {
                          return result.data;     
    });
  };

   service.getShifts = function () {
          return $http.get('data/shifts.json')
                      .then(function (result) {
                          return result.data;     
    });
  };

  service.getShiftData = function (shift) {
          return $http.get('data/shift.data.json')
                      .then(function (result) {
                          return result.data;     
    });
  };

}

})();
