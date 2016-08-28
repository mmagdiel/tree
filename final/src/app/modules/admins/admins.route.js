(function() {

  'use strict';

    // Pass the adminsRoute to the app
	angular
	    .module('y')
	    .run(adminsRoute);


	// Define the adminsRoute
    function adminsRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'admins-index',
		    config: {
		        url: '/admins',
		        templateUrl: 'app/modules/admins/index/admins.index.html',
		        controller: 'adminsIndexCtrl',
		        controllerAs: 'adminsIndex'
		    }
		}, {
		    state: 'admins-store',
		    config: {
		        url: '/admins/store',
		        templateUrl: 'app/modules/admins/store/admins.store.html',
		        controller: 'adminsStoreCtrl',
		        controllerAs: 'adminsStore'
		    }
		}, {
		    state: 'admins-show',
		    config: {
		        url: '/admins/:id',
		        templateUrl: 'app/modules/admins/show/admins.show.html',
		        controller: 'adminsShowCtrl',
		        controllerAs: 'adminsShow'
		    }
		}, {
		    state: 'admins-update',
		    config: {
		        url: '/admins/:id/update',
		        templateUrl: 'app/modules/admins/update/admins.update.html',
		        controller: 'adminsUpdateCtrl',
		        controllerAs: 'adminsUpdate'
		    }
		}, {
		    state: 'admins-destroy',
		    config: {
		        url: '/admins/:id/delete',
		        templateUrl: 'app/modules/admins/destroy/admins.destroy.html',
		        controller: 'adminsDestroyCtrl',
		        controllerAs: 'adminsDestroy'
		    }
		}];
	}

})();
