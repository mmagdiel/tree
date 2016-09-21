(function() {

  'use strict';

    // Pass the staticsRoute to the app
	angular
	    .module('y')
	    .run(biodynamicsRoute);


	// Define the staticsRoute
    function biodynamicsRoute(routerHelper) {


		// Inject with ng-annotate
		"ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'biodynamics-home',
		    config: {
		        url: '/biodynamics',
		        templateUrl: 'app/modules/biodynamics/home/biodynamics.home.html',
		        controller: 'biodynamicsHomeCtrl',
		        controllerAs: 'biodynamicsHome'
		    }
		}];
	}

})();
