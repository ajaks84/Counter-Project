(function () {
'use strict';

angular.module('Data')
.service('DataService', DataService);

DataService.$inject = ['$http']
function DataService($http) {
  var service = this;

  var lines = [];

  var shifts = [];

  var shiftData = [];

  service.getLines = function () {

    //console.log("get lines");

          return $http({method: "GET",
                        url: 'data/grodno.lines.json'
                        })
                          .then(function (result) {
                          lines=result.data;
                          //console.log("lines");
                          //console.log(lines);
                          return lines;     
    });
  };

   service.getShifts = function () {

    //console.log("get shifts");

          return $http({method: "GET",
                        url: 'data/shifts.json'
                        })
                          .then(function (result) {
                          shifts=result.data;
                          //console.log("shifts");
                          //console.log(shifts);
                          return shifts;     
    });
  };

  service.getShiftData = function (shift) {

          return $http.get('data/shift_data.json')
                      .then(function (result) {
                          shiftData=result.data;
                          //console.log("shift data");
                          //console.log(shiftData);
                          return shiftData;     
    });
  };


   }

})();
