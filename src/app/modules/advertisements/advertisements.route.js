(function() {

  'use strict';

    // Pass the advertisementsRoute to the app
	angular
	    .module('y')
	    .run(advertisementsRoute);


	// Define the advertisementsRoute
    function advertisementsRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'advertisements-index',
		    config: {
		        url: '/advertisements',
		        templateUrl: 'app/modules/advertisements/index/advertisements.index.html',
		        controller: 'advertisementsIndexCtrl',
		        controllerAs: 'advertisementsIndex'
		    }
		}, {
		    state: 'advertisements-store',
		    config: {
		        url: '/advertisements/store',
		        templateUrl: 'app/modules/advertisements/store/advertisements.store.html',
		        controller: 'advertisementsStoreCtrl',
		        controllerAs: 'advertisementsStore'
		    }
		}, {
		    state: 'advertisements-show',
		    config: {
		        url: '/advertisements/:id',
		        templateUrl: 'app/modules/advertisements/show/advertisements.show.html',
		        controller: 'advertisementsShowCtrl',
		        controllerAs: 'advertisementsShow'
		    }
		}, {
		    state: 'advertisements-update',
		    config: {
		        url: '/advertisements/:id/update',
		        templateUrl: 'app/modules/advertisements/update/advertisements.update.html',
		        controller: 'advertisementsUpdateCtrl',
		        controllerAs: 'advertisementsUpdate'
		    }
		}, {
		    state: 'advertisements-destroy',
		    config: {
		        url: '/advertisements/:id/delete',
		        templateUrl: 'app/modules/advertisements/destroy/advertisements.destroy.html',
		        controller: 'advertisementsDestroyCtrl',
		        controllerAs: 'advertisementsDestroy'
		    }
		}];
	}

})();
