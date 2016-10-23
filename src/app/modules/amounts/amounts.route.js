(function() {

  'use strict';

    // Pass the amountsRoute to the app
	angular
	    .module('y')
	    .run(amountsRoute);


	// Define the amountsRoute
    function amountsRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'amounts-index',
		    config: {
		        url: '/amounts',
		        templateUrl: 'app/modules/amounts/index/amounts.index.html',
		        controller: 'amountsIndexCtrl',
		        controllerAs: 'amountsIndex'
		    }
		}, {
		    state: 'amounts-store',
		    config: {
		        url: '/amounts/store',
		        templateUrl: 'app/modules/amounts/store/amounts.store.html',
		        controller: 'amountsStoreCtrl',
		        controllerAs: 'amountsStore'
		    }
		}, {
		    state: 'amounts-show',
		    config: {
		        url: '/amounts/:id',
		        templateUrl: 'app/modules/amounts/show/amounts.show.html',
		        controller: 'amountsShowCtrl',
		        controllerAs: 'amountsShow'
		    }
		}, {
		    state: 'amounts-update',
		    config: {
		        url: '/amounts/:id/update',
		        templateUrl: 'app/modules/amounts/update/amounts.update.html',
		        controller: 'amountsUpdateCtrl',
		        controllerAs: 'amountsUpdate'
		    }
		}, {
		    state: 'amounts-destroy',
		    config: {
		        url: '/amounts/:id/delete',
		        templateUrl: 'app/modules/amounts/destroy/amounts.destroy.html',
		        controller: 'amountsDestroyCtrl',
		        controllerAs: 'amountsDestroy'
		    }
		}];
	}

})();
