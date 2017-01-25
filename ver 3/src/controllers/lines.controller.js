(function () {
"use strict";

angular.module('MenuApp')
.controller('LinesController', LinesController);

LinesController.$inject = ['lines'];
function LinesController(lines) {
  var $ctrl = this;
  $ctrl.lines = lines;
  //console.log(lines);
}


})();
