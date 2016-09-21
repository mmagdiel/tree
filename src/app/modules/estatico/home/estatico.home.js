(function() {

  'use strict';

    // Pass the staticsHomeCtrl to the app
    angular
        .module('y')
        .controller('estaticoHomeCtrl', estaticoHomeCtrl);


    // Define the staticsHomeCtrl
    function estaticoHomeCtrl($scope, $state) {
		
		$scope.$on("user.login", function(event, success, data){
			if (success == true ){
				if( data.role == "admin" ){
					$state.go('biodynamics-home')
				} 
				else{
					$state.go('dynamics-home')
				}
			} 
		})

        // Inject with ng-annotate
        "ngInject";


        // Define staticsHome as this for ControllerAs and auto-$scope
        var estaticoHome = this;
            estaticoHome.title =    "AngularJS-boilerplate";
            estaticoHome.content =  "A micro AngularJS boilerplate for start projects with mocking and routing modules ready, based on John Papa's style guide";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the staticsHomeCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('estaticoHomeCtrl init');
        }
    }

})();
