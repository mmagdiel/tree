(function() {

  'use strict';

    // Pass the billsRoute to the app
	angular
	    .module('y')
	    .run(billsRoute);


	// Define the billsRoute
    function billsRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'bills-index',
		    config: {
		        url: '/bills',
		        templateUrl: 'app/modules/bills/index/bills.index.html',
		        controller: 'billsIndexCtrl',
		        controllerAs: 'billsIndex'
		    }
		}, {
		    state: 'bills-store',
		    config: {
		        url: '/bills/store',
		        templateUrl: 'app/modules/bills/store/bills.store.html',
		        controller: 'billsStoreCtrl',
		        controllerAs: 'billsStore'
		    }
		}, {
		    state: 'bills-show',
		    config: {
		        url: '/bills/:id',
		        templateUrl: 'app/modules/bills/show/bills.show.html',
		        controller: 'billsShowCtrl',
		        controllerAs: 'billsShow'
		    }
		}, {
		    state: 'bills-update',
		    config: {
		        url: '/bills/:id/update',
		        templateUrl: 'app/modules/bills/update/bills.update.html',
		        controller: 'billsUpdateCtrl',
		        controllerAs: 'billsUpdate'
		    }
		}, {
		    state: 'bills-destroy',
		    config: {
		        url: '/bills/:id/delete',
		        templateUrl: 'app/modules/bills/destroy/bills.destroy.html',
		        controller: 'billsDestroyCtrl',
		        controllerAs: 'billsDestroy'
		    }
		}];
	}

})();
