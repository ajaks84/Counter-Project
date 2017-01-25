(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html',
    controller: 'LinesController',
    controllerAs: 'linesCtrl',
    resolve: {
        lines: ['DataService', function (DataService) {
                return DataService.getLines();
              }]
              }

  })

  .state('choise', {
    url: '/choise/{line}',
    templateUrl: 'src/templates/choise.template.html',
    controller: 'ChoiseController as chCtrl',
     resolve: {
      lineName: ['$stateParams', function($stateParams){
              return $stateParams.line
              }],
         shifts: ['DataService', function (DataService) {
                return DataService.getShifts();
              }]
}

  })

  .state('report', {
    url: '/report/{line}/{shift}',
    templateUrl: 'src/templates/report.template.html',
    controller: 'ReportController as rptCtrl',
    resolve: {
         line: ['$stateParams', function($stateParams){
                  //console.log($stateParams.line);                  
                  return $stateParams.line
              }],
       shift: ['$stateParams', function($stateParams){
                  //console.log($stateParams.shift);
                  return $stateParams.shift
              }],
   shiftData: ['DataService', function (DataService) {
                //console.log(DataService.getShiftData());
                return DataService.getShiftData();
              }]

  }

});



 
}

})();
