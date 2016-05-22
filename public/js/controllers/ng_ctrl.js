(function(angular){
  
  "use strict";
  
  angular
    .module('ngApp').controller('ngCtrl', ['$scope', function ($scope) {
        
    	$scope.tagline = 'Hello World';
        
    }]);

})(angular);