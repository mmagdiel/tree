(function() {

  'use strict';

    // Pass the ticketsRoute to the app
	angular
	    .module('y')
	    .run(ticketsRoute);


	// Define the ticketsRoute
    function ticketsRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'tickets-index',
		    config: {
		        url: '/tickets',
		        templateUrl: 'app/modules/tickets/index/tickets.index.html',
		        controller: 'ticketsIndexCtrl',
		        controllerAs: 'ticketsIndex'
		    }
		}, {
		    state: 'tickets-store',
		    config: {
		        url: '/tickets/store',
		        templateUrl: 'app/modules/tickets/store/tickets.store.html',
		        controller: 'ticketsStoreCtrl',
		        controllerAs: 'ticketsStore'
		    }
		}, {
		    state: 'tickets-show',
		    config: {
		        url: '/tickets/:id',
		        templateUrl: 'app/modules/tickets/show/tickets.show.html',
		        controller: 'ticketsShowCtrl',
		        controllerAs: 'ticketsShow'
		    }
		}, {
		    state: 'tickets-update',
		    config: {
		        url: '/tickets/:id/update',
		        templateUrl: 'app/modules/tickets/update/tickets.update.html',
		        controller: 'ticketsUpdateCtrl',
		        controllerAs: 'ticketsUpdate'
		    }
		}, {
		    state: 'tickets-destroy',
		    config: {
		        url: '/tickets/:id/delete',
		        templateUrl: 'app/modules/tickets/destroy/tickets.destroy.html',
		        controller: 'ticketsDestroyCtrl',
		        controllerAs: 'ticketsDestroy'
		    }
		}];
	}

})();
