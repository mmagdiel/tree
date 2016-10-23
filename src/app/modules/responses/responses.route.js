(function() {

  'use strict';

    // Pass the responsesRoute to the app
	angular
	    .module('y')
	    .run(responsesRoute);


	// Define the responsesRoute
    function responsesRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'responses-index',
		    config: {
		        url: '/responses',
		        templateUrl: 'app/modules/responses/index/responses.index.html',
		        controller: 'responsesIndexCtrl',
		        controllerAs: 'responsesIndex'
		    }
		}, {
		    state: 'responses-store',
		    config: {
		        url: '/responses/store',
		        templateUrl: 'app/modules/responses/store/responses.store.html',
		        controller: 'responsesStoreCtrl',
		        controllerAs: 'responsesStore'
		    }
		}, {
		    state: 'responses-show',
		    config: {
		        url: '/responses/:id',
		        templateUrl: 'app/modules/responses/show/responses.show.html',
		        controller: 'responsesShowCtrl',
		        controllerAs: 'responsesShow'
		    }
		}, {
		    state: 'responses-update',
		    config: {
		        url: '/responses/:id/update',
		        templateUrl: 'app/modules/responses/update/responses.update.html',
		        controller: 'responsesUpdateCtrl',
		        controllerAs: 'responsesUpdate'
		    }
		}, {
		    state: 'responses-destroy',
		    config: {
		        url: '/responses/:id/delete',
		        templateUrl: 'app/modules/responses/destroy/responses.destroy.html',
		        controller: 'responsesDestroyCtrl',
		        controllerAs: 'responsesDestroy'
		    }
		}];
	}

})();
