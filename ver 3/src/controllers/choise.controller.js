(function () {
'use strict';

angular.module('MenuApp')
.controller('ChoiseController', ChoiseController);


ChoiseController.$inject = ['lineName','shifts'];
function ChoiseController(lineName,shifts) {
  var chCtrl = this;

  chCtrl.lineName = lineName;
  chCtrl.shifts = shifts;
  chCtrl.stub = 'stub';
  
  //console.log('lineName+: '+lineName);
  //console.log('shifts: ');
  //console.log(shifts);
}

})();
