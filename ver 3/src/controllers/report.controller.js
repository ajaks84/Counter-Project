(function () {
'use strict';

angular.module('MenuApp')
.controller('ReportController', ReportController);


ReportController.$inject = ['line','shift',"shiftData"];
function ReportController(line,shift,shiftData) {
  var rptCtrl = this;
  rptCtrl.line = line;
  rptCtrl.shift = shift;
  rptCtrl.shiftData = shiftData;

  rptCtrl.display = {};
  console.log(rptCtrl.shift);
  console.log(rptCtrl.shiftData);
  
  switch(rptCtrl.shift) {
	    case 'Present day shift':
	        rptCtrl.display = rptCtrl.shiftData.Present_day_shift;
	        break;
	    case 'Present night shift':
	        rptCtrl.display = rptCtrl.shiftData.Present_night_shift;
	        break;
        case 'Previous day shift':
        rptCtrl.display = rptCtrl.shiftData.Previous_day_shift;
        	 break;
        case 'Previous night shift':
        rptCtrl.display = rptCtrl.shiftData.Previous_night_shift;
         	 break;
}
 console.log(rptCtrl.display);

}

})();
