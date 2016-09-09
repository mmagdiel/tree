(function() {

  'use strict';

    // Pass the articlesRoute to the app
	angular
	    .module('y')
	    .run(articlesRoute);


	// Define the articlesRoute
    function articlesRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'articles-index',
		    config: {
		        url: '/articles',
		        templateUrl: 'app/modules/articles/index/articles.index.html',
		        controller: 'articlesIndexCtrl',
		        controllerAs: 'articlesIndex'
		    }
		}, {
		    state: 'articles-store',
		    config: {
		        url: '/articles/store',
		        templateUrl: 'app/modules/articles/store/articles.store.html',
		        controller: 'articlesStoreCtrl',
		        controllerAs: 'articlesStore'
		    }
		}, {
		    state: 'articles-show',
		    config: {
		        url: '/articles/:id',
		        templateUrl: 'app/modules/articles/show/articles.show.html',
		        controller: 'articlesShowCtrl',
		        controllerAs: 'articlesShow'
		    }
		}, {
		    state: 'articles-update',
		    config: {
		        url: '/articles/:id/update',
		        templateUrl: 'app/modules/articles/update/articles.update.html',
		        controller: 'articlesUpdateCtrl',
		        controllerAs: 'articlesUpdate'
		    }
		}, {
		    state: 'articles-destroy',
		    config: {
		        url: '/articles/:id/delete',
		        templateUrl: 'app/modules/articles/destroy/articles.destroy.html',
		        controller: 'articlesDestroyCtrl',
		        controllerAs: 'articlesDestroy'
		    }
		}];
	}

})();
