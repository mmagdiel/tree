(function() {

  'use strict';

    // Pass the staticsRoute to the app
	angular
	    .module('y')
	    .run(staticsRoute);


	// Define the staticsRoute
    function staticsRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'statics-index',
		    config: {
		        url: '/statics',
		        templateUrl: 'app/modules/statics/index/statics.index.html',
		        controller: 'staticsIndexCtrl',
		        controllerAs: 'staticsIndex'
		    }
		}, {
		    state: 'statics-store',
		    config: {
		        url: '/statics/store',
		        templateUrl: 'app/modules/statics/store/statics.store.html',
		        controller: 'staticsStoreCtrl',
		        controllerAs: 'staticsStore'
		    }
		}, {
		    state: 'statics-show',
		    config: {
		        url: '/statics/:id',
		        templateUrl: 'app/modules/statics/show/statics.show.html',
		        controller: 'staticsShowCtrl',
		        controllerAs: 'staticsShow'
		    }
		}, {
		    state: 'statics-update',
		    config: {
		        url: '/statics/:id/update',
		        templateUrl: 'app/modules/statics/update/statics.update.html',
		        controller: 'staticsUpdateCtrl',
		        controllerAs: 'staticsUpdate'
		    }
		}, {
		    state: 'statics-destroy',
		    config: {
		        url: '/statics/:id/delete',
		        templateUrl: 'app/modules/statics/destroy/statics.destroy.html',
		        controller: 'staticsDestroyCtrl',
		        controllerAs: 'staticsDestroy'
		    }
		}];
	}

})();
