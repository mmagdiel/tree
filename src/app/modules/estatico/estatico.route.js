(function() {

  'use strict';

    // Pass the staticsRoute to the app
	angular
	    .module('y')
	    .run(estaticoRoute);


	// Define the staticsRoute
    function estaticoRoute(routerHelper) {


		// Inject with ng-annotate
		"ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'estatico-home',
		    config: {
		        url: '/',
		        templateUrl: 'app/modules/estatico/home/estatico.home.html',
		        controller: 'estaticoHomeCtrl',
		        controllerAs: 'estaticoHome'
		    }
		}];
	}

})();
