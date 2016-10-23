(function() {

  'use strict';

    // Pass the staticsRoute to the app
	angular
	    .module('y')
	    .run(dynamicsRoute);


	// Define the staticsRoute
    function dynamicsRoute(routerHelper) {


		// Inject with ng-annotate
		"ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'dynamics-home',
		    config: {
		        url: '/dynamics',
		        templateUrl: 'app/modules/dynamics/home/dynamics.home.html',
		        controller: 'dynamicsHomeCtrl',
		        controllerAs: 'dynamicsHome'
		    }
		}];
	}

})();
