(function () {
'use strict';

angular.module('MenuApp')
.controller('ChoiseController', ChoiseController);


ChoiseController.$inject = ['lineName','shifts'];
function ChoiseController(lineName,shifts) {
  var chCtrl = this;

  chCtrl.lineName = lineName;
  chCtrl.shifts = shifts;
  
  //console.log(shifts);
}

})();
