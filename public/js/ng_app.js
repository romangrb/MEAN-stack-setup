(function(angular){
  
  "use strict";
  
  var ngApp = angular.module("ngApp", ['ngRoute', 'ngAnimate']);
  
    ngApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider.
        when('/', {
    			templateUrl: '/views/ng_page.html',
    			controller: 'ngCtrl'
    		}).
    		otherwise({
          redirectTo: '/'
        });
    		$locationProvider.html5Mode(true);
    }]);
    
  return ngApp;
  
})(angular);  

