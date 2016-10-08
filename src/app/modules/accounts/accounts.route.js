(function() {

  'use strict';

    // Pass the accountsRoute to the app
	angular
	    .module('y')
	    .run(accountsRoute);


	// Define the accountsRoute
    function accountsRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'accounts-index',
		    config: {
		        url: '/accounts',
		        templateUrl: 'app/modules/accounts/index/accounts.index.html',
		        controller: 'accountsIndexCtrl',
		        controllerAs: 'accountsIndex'
		    }
		}, {
		    state: 'accounts-store',
		    config: {
		        url: '/accounts/store',
		        templateUrl: 'app/modules/accounts/store/accounts.store.html',
		        controller: 'accountsStoreCtrl',
		        controllerAs: 'accountsStore'
		    }
		}, {
		    state: 'accounts-stores',
		    config: {
		        url: '/accounts/stores',
		        templateUrl: 'app/modules/accounts/stores/accounts.stores.html',
		        controller: 'accountsStoresCtrl',
		        controllerAs: 'accountsStores'
		    }
		}, {
		    state: 'accounts-show',
		    config: {
		        url: '/accounts/:id',
		        templateUrl: 'app/modules/accounts/show/accounts.show.html',
		        controller: 'accountsShowCtrl',
		        controllerAs: 'accountsShow'
		    }
		}, {
		    state: 'accounts-update',
		    config: {
		        url: '/accounts/:id/update',
		        templateUrl: 'app/modules/accounts/update/accounts.update.html',
		        controller: 'accountsUpdateCtrl',
		        controllerAs: 'accountsUpdate'
		    }
		}, {
		    state: 'accounts-destroy',
		    config: {
		        url: '/accounts/:id/delete',
		        templateUrl: 'app/modules/accounts/destroy/accounts.destroy.html',
		        controller: 'accountsDestroyCtrl',
		        controllerAs: 'accountsDestroy'
		    }
		}];
	}

})();
