(function() {

  'use strict';

    // Pass the documentsRoute to the app
	angular
	    .module('y')
	    .run(documentsRoute);


	// Define the documentsRoute
    function documentsRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'documents-index',
		    config: {
		        url: '/documents',
		        templateUrl: 'app/modules/documents/index/documents.index.html',
		        controller: 'documentsIndexCtrl',
		        controllerAs: 'documentsIndex'
		    }
		}, {
		    state: 'documents-store',
		    config: {
		        url: '/documents/store',
		        templateUrl: 'app/modules/documents/store/documents.store.html',
		        controller: 'documentsStoreCtrl',
		        controllerAs: 'documentsStore'
		    }
		}, {
		    state: 'documents-show',
		    config: {
		        url: '/documents/:id',
		        templateUrl: 'app/modules/documents/show/documents.show.html',
		        controller: 'documentsShowCtrl',
		        controllerAs: 'documentsShow'
		    }
		}, {
		    state: 'documents-update',
		    config: {
		        url: '/documents/:id/update',
		        templateUrl: 'app/modules/documents/update/documents.update.html',
		        controller: 'documentsUpdateCtrl',
		        controllerAs: 'documentsUpdate'
		    }
		}, {
		    state: 'documents-destroy',
		    config: {
		        url: '/documents/:id/delete',
		        templateUrl: 'app/modules/documents/destroy/documents.destroy.html',
		        controller: 'documentsDestroyCtrl',
		        controllerAs: 'documentsDestroy'
		    }
		}];
	}

})();
