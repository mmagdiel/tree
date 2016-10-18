(function() {

  'use strict';

    // Pass the treesRoute to the app
	angular
	    .module('y')
	    .run(treesRoute);


	// Define the treesRoute
    function treesRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'trees-index',
		    config: {
		        url: '/trees',
		        templateUrl: 'app/modules/trees/index/trees.index.html',
		        controller: 'treesIndexCtrl',
		        controllerAs: 'treesIndex'
		    }
		}, {
		    state: 'trees-store',
		    config: {
		        url: '/trees/store',
		        templateUrl: 'app/modules/trees/store/trees.store.html',
		        controller: 'treesStoreCtrl',
		        controllerAs: 'treesStore'
		    }
		}, {
		    state: 'trees-show',
		    config: {
		        url: '/trees/:id',
		        templateUrl: 'app/modules/trees/show/trees.show.html',
		        controller: 'treesShowCtrl',
		        controllerAs: 'treesShow'
		    }
		}, {
		    state: 'trees-update',
		    config: {
		        url: '/trees/:id/update',
		        templateUrl: 'app/modules/trees/update/trees.update.html',
		        controller: 'treesUpdateCtrl',
		        controllerAs: 'treesUpdate'
		    }
		}, {
		    state: 'trees-destroy',
		    config: {
		        url: '/trees/:id/delete',
		        templateUrl: 'app/modules/trees/destroy/trees.destroy.html',
		        controller: 'treesDestroyCtrl',
		        controllerAs: 'treesDestroy'
		    }
		}];
	}

})();
