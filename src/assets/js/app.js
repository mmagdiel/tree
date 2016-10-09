(function(){
	"use strict";

	angular.module("core.cookie", ["ngCookies"]);
})();
// (function(){

// 	'use strict';

// 	// Define angular core.mocking module
// 	angular.module('core.mocking', ['ngMockE2E']);

// })();
(function(){

	'use strict';

	// Define angular core.theming module
	angular.module('core.rest', ['ngRestful']);

})();
(function(){

	'use strict';

	// Define angular core.routing module
	angular.module('core.routing', ['ui.router']);

})();
(function(){

	'use strict';

	// Define angular core.theming module
	angular.module('core.theming', ['ngMaterial']);

})();
(function() {

    'use strict';

    // Define angular core.validator module
    angular.module('core.validator', ['valdr']);

})();

(function(){
	'use strict';

	// Define angular app module
	angular.module('y', [
		'core.rest',
		'core.routing',
		'core.theming',
		'core.validator',
		'core.cookie',
		'ngMaterial',
		'ui.router'
	])
	.controller("mainController", ["$scope", "$state", "userService", "$location", function($scope, $state, $user, $location){
		if(!$user.hasCookie()){
			$location.path($state.href("/"));
		}

		$scope.$on("user.logout", function(){
			$state.go("estatico-home");
		});
	}])
})();

(function() {

  'use strict';

    // Pass the accountsFactory to the app
    angular
        .module('y')
        .factory('accountsFactory', accountsFactory);


    // Define the accountsFactory
    function accountsFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("accounts", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });


        // Define the account factory object to return
        var accountsFactory = {

            index: index,
            show: show,
            store: store,
            stores: stores,
            update: update,
            destroy: destroy,

        };


        // Return the account factory
        return accountsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the accountsFactory
        |
        */


        // Display a listing of accounts.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified account.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created account in storage.
        function store(data) {

            return resource.save(null, data)
                        .then(function(data){ return data.data; });
        }

        // Store a newly created account in storage.
        function stores(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified account in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified account from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();

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

(function() {

    'use strict';

    // Pass the accountssValidator to the app
    angular
    .module('y')
        .run(accountssValidator);


    // Define the accountssValidator
    function accountssValidator(validatorHelper) {


        // Inject with ng-annotate
        "ngInject";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        validatorHelper.configureValidators(getValidators()); // Intercept all the api and add them to the httpBackend



        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the accountssValidator
        |
        */



        // Function that pass the array that will create the model validator
        function getValidators() {

            // Object to pass with validation rules
            return {};

        }
    }

})();

(function() {

  'use strict';

    // Pass the advertisementsFactory to the app
    angular
        .module('y')
        .factory('advertisementsFactory', advertisementsFactory);


    // Define the advertisementsFactory
    function advertisementsFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("advertisements", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });


        // Define the advertisement factory object to return
        var advertisementsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the advertisement factory
        return advertisementsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the advertisementsFactory
        |
        */


        // Display a listing of advertisements.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified advertisement.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created advertisement in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified advertisement in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified advertisement from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();

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

(function() {

    'use strict';

    // Pass the advertisementssValidator to the app
    angular
    .module('y')
        .run(advertisementssValidator);


    // Define the advertisementssValidator
    function advertisementssValidator(validatorHelper) {


        // Inject with ng-annotate
        "ngInject";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        validatorHelper.configureValidators(getValidators()); // Intercept all the api and add them to the httpBackend



        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the advertisementssValidator
        |
        */



        // Function that pass the array that will create the model validator
        function getValidators() {

            // Object to pass with validation rules
            return {};

        }
    }

})();

(function() {

  'use strict';

    // Pass the amountsFactory to the app
    angular
        .module('y')
        .factory('amountsFactory', amountsFactory);


    // Define the amountsFactory
    function amountsFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("amounts", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });


        // Define the amount factory object to return
        var amountsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the amount factory
        return amountsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the amountsFactory
        |
        */


        // Display a listing of amounts.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified amount.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created amount in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified amount in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified amount from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();

(function() {

  'use strict';

    // Pass the amountsRoute to the app
	angular
	    .module('y')
	    .run(amountsRoute);


	// Define the amountsRoute
    function amountsRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'amounts-index',
		    config: {
		        url: '/amounts',
		        templateUrl: 'app/modules/amounts/index/amounts.index.html',
		        controller: 'amountsIndexCtrl',
		        controllerAs: 'amountsIndex'
		    }
		}, {
		    state: 'amounts-store',
		    config: {
		        url: '/amounts/store',
		        templateUrl: 'app/modules/amounts/store/amounts.store.html',
		        controller: 'amountsStoreCtrl',
		        controllerAs: 'amountsStore'
		    }
		}, {
		    state: 'amounts-show',
		    config: {
		        url: '/amounts/:id',
		        templateUrl: 'app/modules/amounts/show/amounts.show.html',
		        controller: 'amountsShowCtrl',
		        controllerAs: 'amountsShow'
		    }
		}, {
		    state: 'amounts-update',
		    config: {
		        url: '/amounts/:id/update',
		        templateUrl: 'app/modules/amounts/update/amounts.update.html',
		        controller: 'amountsUpdateCtrl',
		        controllerAs: 'amountsUpdate'
		    }
		}, {
		    state: 'amounts-destroy',
		    config: {
		        url: '/amounts/:id/delete',
		        templateUrl: 'app/modules/amounts/destroy/amounts.destroy.html',
		        controller: 'amountsDestroyCtrl',
		        controllerAs: 'amountsDestroy'
		    }
		}];
	}

})();

(function() {

    'use strict';

    // Pass the amountssValidator to the app
    angular
    .module('y')
        .run(amountssValidator);


    // Define the amountssValidator
    function amountssValidator(validatorHelper) {


        // Inject with ng-annotate
        "ngInject";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        validatorHelper.configureValidators(getValidators()); // Intercept all the api and add them to the httpBackend



        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the amountssValidator
        |
        */



        // Function that pass the array that will create the model validator
        function getValidators() {

            // Object to pass with validation rules
            return {};

        }
    }

})();

(function() {

  'use strict';

    // Pass the articlesFactory to the app
    angular
        .module('y')
        .factory('articlesFactory', articlesFactory);


    // Define the articlesFactory
    function articlesFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("articles", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });

        // Define the article factory object to return
        var articlesFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the article factory
        return articlesFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the articlesFactory
        |
        */


        // Display a listing of articles.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified article.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created article in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified article in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified article from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();

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

(function() {

    'use strict';

    // Pass the articlessValidator to the app
    angular
    .module('y')
        .run(articlessValidator);


    // Define the articlessValidator
    function articlessValidator(validatorHelper) {


        // Inject with ng-annotate
        "ngInject";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        validatorHelper.configureValidators(getValidators()); // Intercept all the api and add them to the httpBackend



        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the articlessValidator
        |
        */



        // Function that pass the array that will create the model validator
        function getValidators() {

            // Object to pass with validation rules
            return {};

        }
    }

})();

(function() {

  'use strict';

    // Pass the billsFactory to the app
    angular
        .module('y')
        .factory('billsFactory', billsFactory);


    // Define the billsFactory
    function billsFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("bills", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });


        // Define the bill factory object to return
        var billsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the bill factory
        return billsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the billsFactory
        |
        */


        // Display a listing of bills.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified bill.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created bill in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified bill in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified bill from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();

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

(function() {

    'use strict';

    // Pass the billssValidator to the app
    angular
    .module('y')
        .run(billssValidator);


    // Define the billssValidator
    function billssValidator(validatorHelper) {


        // Inject with ng-annotate
        "ngInject";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        validatorHelper.configureValidators(getValidators()); // Intercept all the api and add them to the httpBackend



        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the billssValidator
        |
        */



        // Function that pass the array that will create the model validator
        function getValidators() {

            // Object to pass with validation rules
            return {};

        }
    }

})();

(function() {

  'use strict';

    // Pass the staticsRoute to the app
	angular
	    .module('y')
	    .run(biodynamicsRoute);


	// Define the staticsRoute
    function biodynamicsRoute(routerHelper) {


		// Inject with ng-annotate
		"ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'biodynamics-home',
		    config: {
		        url: '/biodynamics',
		        templateUrl: 'app/modules/biodynamics/home/biodynamics.home.html',
		        controller: 'biodynamicsHomeCtrl',
		        controllerAs: 'biodynamicsHome'
		    }
		}];
	}

})();

(function() {

  'use strict';

    // Pass the documentsFactory to the app
    angular
        .module('y')
        .factory('documentsFactory', documentsFactory);


    // Define the documentsFactory
    function documentsFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("documents", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });


        // Define the document factory object to return
        var documentsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the document factory
        return documentsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the documentsFactory
        |
        */


        // Display a listing of documents.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified document.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created document in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified document in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified document from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();

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

(function() {

    'use strict';

    // Pass the documentssValidator to the app
    angular
    .module('y')
        .run(documentssValidator);


    // Define the documentssValidator
    function documentssValidator(validatorHelper) {


        // Inject with ng-annotate
        "ngInject";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        validatorHelper.configureValidators(getValidators()); // Intercept all the api and add them to the httpBackend



        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the documentssValidator
        |
        */



        // Function that pass the array that will create the model validator
        function getValidators() {

            // Object to pass with validation rules
            return {};

        }
    }

})();

(function() {

  'use strict';

    // Pass the staticsRoute to the app
	angular
	    .module('y')
	    .run(dynamicsRoute);


	// Define the staticsRoute
    function dynamicsRoute(routerHelper) {


		// Inject with ng-annotate
		"ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'dynamics-home',
		    config: {
		        url: '/dynamics',
		        templateUrl: 'app/modules/dynamics/home/dynamics.home.html',
		        controller: 'dynamicsHomeCtrl',
		        controllerAs: 'dynamicsHome'
		    }
		}];
	}

})();

(function() {

  'use strict';

    // Pass the staticsRoute to the app
	angular
	    .module('y')
	    .run(estaticoRoute);


	// Define the staticsRoute
    function estaticoRoute(routerHelper) {


		// Inject with ng-annotate
		"ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'estatico-home',
		    config: {
		        url: '/',
		        templateUrl: 'app/modules/estatico/home/estatico.home.html',
		        controller: 'estaticoHomeCtrl',
		        controllerAs: 'estaticoHome'
		    }
		}];
	}

})();

(function() {

  'use strict';

    // Pass the responsesFactory to the app
    angular
        .module('y')
        .factory('responsesFactory', responsesFactory);


    // Define the responsesFactory
    function responsesFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("responses", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });


        // Define the response factory object to return
        var responsesFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the response factory
        return responsesFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the responsesFactory
        |
        */


        // Display a listing of responses.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified response.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created response in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified response in storage.
        function update(id, data) {
            
            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified response from storage.
        function destroy(id) {

            return $http.delete(responseBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();

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

(function() {

    'use strict';

    // Pass the responsessValidator to the app
    angular
    .module('y')
        .run(responsessValidator);


    // Define the responsessValidator
    function responsessValidator(validatorHelper) {


        // Inject with ng-annotate
        "ngInject";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        validatorHelper.configureValidators(getValidators()); // Intercept all the api and add them to the httpBackend



        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the responsessValidator
        |
        */



        // Function that pass the array that will create the model validator
        function getValidators() {

            // Object to pass with validation rules
            return {};

        }
    }

})();

(function() {

  'use strict';

    // Pass the staticsFactory to the app
    angular
        .module('y')
        .factory('staticsFactory', staticsFactory);


    // Define the staticsFactory
    function staticsFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("statics", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });

        // Define the static factory object to return
        var staticsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the static factory
        return staticsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the staticsFactory
        |
        */


        // Display a listing of statics.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified static.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created static in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified static in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified static from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();

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

(function() {

    'use strict';

    // Pass the staticssValidator to the app
    angular
    .module('y')
        .run(staticssValidator);


    // Define the staticssValidator
    function staticssValidator(validatorHelper) {


        // Inject with ng-annotate
        "ngInject";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        validatorHelper.configureValidators(getValidators()); // Intercept all the api and add them to the httpBackend



        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the staticssValidator
        |
        */



        // Function that pass the array that will create the model validator
        function getValidators() {

            // Object to pass with validation rules
            return {};

        }
    }

})();

(function() {

  'use strict';

    // Pass the ticketsFactory to the app
    angular
        .module('y')
        .factory('ticketsFactory', ticketsFactory);


    // Define the ticketsFactory
    function ticketsFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("tickets", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });

        // Define the ticket factory object to return
        var ticketsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the ticket factory
        return ticketsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the ticketsFactory
        |
        */


        // Display a listing of tickets.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified ticket.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created ticket in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified ticket in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified ticket from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();

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

(function() {

    'use strict';

    // Pass the ticketssValidator to the app
    angular
    .module('y')
        .run(ticketssValidator);


    // Define the ticketssValidator
    function ticketssValidator(validatorHelper) {


        // Inject with ng-annotate
        "ngInject";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        validatorHelper.configureValidators(getValidators()); // Intercept all the api and add them to the httpBackend



        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the ticketssValidator
        |
        */



        // Function that pass the array that will create the model validator
        function getValidators() {

            // Object to pass with validation rules
            return {};

        }
    }

})();

(function() {

  'use strict';

    // Pass the usersFactory to the app
    angular
        .module('y')
        .factory('usersFactory', usersFactory);


    // Define the usersFactory
    function usersFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("users", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });


        // Define the user factory object to return
        var usersFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the user factory
        return usersFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersFactory
        |
        */


        // Display a listing of users.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified user.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created user in storage.
        function store(data) {

             return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified user in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified user from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();

(function() {

  'use strict';

    // Pass the usersRoute to the app
	angular
	    .module('y')
	    .run(usersRoute);


	// Define the usersRoute
    function usersRoute(routerHelper) {


        // Inject with ng-annotate
        "ngInject";


    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{

		    state: 'users-index',
		    config: {
		        url: '/users',
		        templateUrl: 'app/modules/users/index/users.index.html',
		        controller: 'usersIndexCtrl',
		        controllerAs: 'usersIndex'
		    }
		}, {
		    state: 'users-store',
		    config: {
		        url: '/users/store',
		        templateUrl: 'app/modules/users/store/users.store.html',
		        controller: 'usersStoreCtrl',
		        controllerAs: 'usersStore'
		    }
		}, {
		    state: 'users-show',
		    config: {
		        url: '/users/:id',
		        templateUrl: 'app/modules/users/show/users.show.html',
		        controller: 'usersShowCtrl',
		        controllerAs: 'usersShow'
		    }
		}, {
		    state: 'users-update',
		    config: {
		        url: '/users/:id/update',
		        templateUrl: 'app/modules/users/update/users.update.html',
		        controller: 'usersUpdateCtrl',
		        controllerAs: 'usersUpdate'
		    }
		}, {
		    state: 'users-destroy',
		    config: {
		        url: '/users/:id/delete',
		        templateUrl: 'app/modules/users/destroy/users.destroy.html',
		        controller: 'usersDestroyCtrl',
		        controllerAs: 'usersDestroy'
		    }
		}];
	}

})();

(function() {

    'use strict';

    // Pass the userssValidator to the app
    angular
    .module('y')
        .run(userssValidator);


    // Define the userssValidator
    function userssValidator(validatorHelper) {


        // Inject with ng-annotate
        "ngInject";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        validatorHelper.configureValidators(getValidators()); // Intercept all the api and add them to the httpBackend



        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the userssValidator
        |
        */



        // Function that pass the array that will create the model validator
        function getValidators() {

            // Object to pass with validation rules
            return {};

        }
    }

})();

(function() {

  'use strict';

    // Pass the userService to the app
    angular
        .module('y')
        .factory('userService', userService);


    // Define the userService
    function userService($resource, $rootScope, $cookies) {


        // Inject with ng-annotate
        "ngInject";

        // Define the user factory object to return
        var userService = {
            $user: {
                id: null,
                username: null,
                access_token: null,
                role: null
            },
            isGuest: true,
            init: init,
            login: login,
            hasCookie: hasCookie,
            getId: getId,
            getToken: getToken,
            getName: getName,
            getRole: getRole,
            cookieLogin: cookieLogin,
            logout: logout
        };

        // Return the user factory
        return userService;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the userService
        |
        */


        // Display a listing of user.
        function init() {
            console.log('Init user factory');
        }

        // Logins a current user
        function login(data, cb = null){
            var login = new $resource("login");

            var success = false;

            login.save(null, data)
                .then(function(response){
                    if(response.status == 200 && response.data.passed)
                    {
                        userService.$user = response.data.data;
                        userService.isGuest = false;
                        success = true;

                        if(data.cookie){
                            storeCookie("access_token", response.data.data.access_token);
                        }

                        $rootScope.$broadcast("user.login", success, userService.$user);
                    }

                    cb(null, success);
                })
                .catch(function(err){
                    cb(err, false);
                });
        }

        // Checks if the current session has a cookie stored
        function hasCookie()
        {
            return ($cookies.get("access_token") !== undefined);
        }

        // Gets the id of the current logged user
        function getId(){
            return userService.$user.id;
        }

        // Gets the access_token of the current logged user
        function getToken(){
            return userService.$user.access_token;
        }

        // Gets the username of the current logged user
        function getName(){
            return userService.$user.username;
        }

        // Gets the username of the current logged user
        function getRole(){
            return userService.$user.role;
        }

        // Store a cookie value
        function storeCookie(key, value){
            $cookies.put(key, value);
        }

        // Try to login through cookie if defined
        function cookieLogin(cb){
            if($cookies.get("access_token")){
                var login = new $resource("login");

                var data = {
                    access_token: $cookies.get("access_token")
                }

                var success = false;

                login.save(null, data)
                    .then(function(response){
                        if(response.status == 200 && response.data.passed)
                        {
                            userService.$user = response.data.data;
                            userService.isGuest = false;
                            success = true;

                            $rootScope.$broadcast("user.login", success, userService.$user);
                        }

                        if(cb){
                            cb(null, success, userService.$user);
                        }
                    })
                    .catch(function(err){
                        console.error(err);
                    })

            }
            else{
                cb(null, false, null);
            }
        }

        // Restore the users's data to default
        function restoreUser(){
            userService.$user = {
                id: null,
                username: null,
                access_token: null,
                role: null
            };
        }

        // Logout the current user
        function logout(){
            restoreUser();

            // Remove the cookie token if it's stored
            if($cookies.get("access_token")){
                $cookies.remove("access_token");
            }

            userService.isGuest = true;

            $rootScope.$broadcast("user.logout");
        }
    }
})();

(function() {

  'use strict';

    // Pass the accountsDestroyCtrl to the app
    angular
        .module('y')
        .controller('accountsDestroyCtrl', accountsDestroyCtrl);


    // Define the accountsDestroyCtrl
    function accountsDestroyCtrl(accountsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define accountsDestroy as this for ControllerAs and auto-$scope
        var accountsDestroy = this;


        // Define the accountsDestroy functions and objects that will be passed to the view
        accountsDestroy.account = {};                                                 // Object for show the account
        accountsDestroy.destroy = destroy;                                         // Delete a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the accountsDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('accountsDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return accountsFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the account
        function show(id) {

            return accountsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                accountsDestroy.account = data;
                return accountsDestroy.account;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the accountsIndexCtrl to the app
    angular
        .module('y')
        .controller('accountsIndexCtrl', accountsIndexCtrl);


    // Define the accountsIndexCtrl
    function accountsIndexCtrl(accountsFactory, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define accountsIndex as this for ControllerAs and auto-$scope
        var accountsIndex = this;


        // Define the accountsIndex functions and objects that will be passed to the view
        accountsIndex.accounts = [];                                              // Array for list of accounts


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        index();
		

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the accountsIndexCtrl
        |
        */

		accountsIndex.go = function(state,id){
			$state.go(state,{
				id: id
			});
		}

        // Sample for init function
        function initLog() {

            console.log('accountsIndexCtrl init');
        }


        // Get all accounts.
        function index() {

            return accountsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            accountsIndex.accounts = data.data;
	            return accountsIndex.accounts;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the accountsStoreCtrl to the app
    angular
        .module('y')
        .controller('accountsStoreCtrl', accountsStoreCtrl);


    // Define the accountsStoreCtrl
    function accountsStoreCtrl(accountsFactory, $mdDialog) {

        // Inject with ng-annotate
        "ngInject";


        // Define accountsStore as this for ControllerAs and auto-$scope
        var accountsStore = this;


        // Define the accountsStore functions and objects that will be passed to the view
        accountsStore.store = store;                                           // Store a resource

        accountsStore.bandera = false;

        accountsStore.form = {
            username: null,
            password: null,
            repassword: null
        };

        accountsStore.register = function(){
            console.log(accountsStore);
            if(!accountsStore.bandera){
                var dialogAlert = $mdDialog.alert({
                    title: "Error",
                    textContent: "Usted no ha aceptado los terminos y condiciones",
                    ok: "Ok"
                });

                $mdDialog.show(dialogAlert);
            }

            else if(accountsStore.form.password != accountsStore.form.repassword){
                var dialogAlert = $mdDialog.alert({
                    title: "Error",
                    textContent: "Las contrasenas no coinciden",
                    ok: "Ok"
                });

                $mdDialog.show(dialogAlert);
            }

            else{
                store(accountsStore.form);
            }
        }


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the accountsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('accountsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {
			
            return accountsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                var dialogAlert;

                if(data.passed){
                    dialogAlert = $mdDialog.alert({
                        title: "Registro",
                        textContent: "Usuario registrado con exito",
                        ok: "Ok"
                    });
                }

                else{
                    dialogAlert = $mdDialog.alert({
                        title: "Error",
                        textContent: "Uno de los campos no cumple los requerimientos",
                        ok: "Ok"
                    });
                }

                $mdDialog.show(dialogAlert);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

                var dialogAlert = $mdDialog.alert({
                    title: "Error",
                    textContent: "Error en la comunicacion con el servicio, intente de nuevo mas tarde.",
                    ok: "Ok"
                });

                $mdDialog.show(dialogAlert);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the accountsStoreCtrl to the app
    angular
        .module('y')
        .controller('accountsStoresCtrl', accountsStoresCtrl);


    // Define the accountsStoreCtrl
    function accountsStoresCtrl(accountsFactory,$scope) {
		$scope.bandera=false;

        // Inject with ng-annotate
        "ngInject";


        // Define accountsStore as this for ControllerAs and auto-$scope
        var accountsStores = this;


        // Define the accountsStore functions and objects that will be passed to the view
        accountsStores.stores = store;                                           // Store a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the accountsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('accountsStoresCtrl init');
        }


        // Delete a resource
        function store(data) {
			
            return accountsFactory.stores(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the accountsUpdateCtrl to the app
    angular
        .module('y')
        .controller('accountsUpdateCtrl', accountsUpdateCtrl);


    // Define the accountsUpdateCtrl
    function accountsUpdateCtrl(accountsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define accountsUpdate as this for ControllerAs and auto-$scope
        var accountsUpdate = this;


        // Define the accountsUpdate functions and objects that will be passed to the view
        accountsUpdate.account = {};                                                  // Object for show the account
        accountsUpdate.update = update;                                            // Update a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the accountsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('accountsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return accountsFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the account
        function show(id) {

            return accountsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                accountsUpdate.account = data;
                return accountsUpdate.account;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the advertisementsDestroyCtrl to the app
    angular
        .module('y')
        .controller('advertisementsDestroyCtrl', advertisementsDestroyCtrl);


    // Define the advertisementsDestroyCtrl
    function advertisementsDestroyCtrl(advertisementsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define advertisementsDestroy as this for ControllerAs and auto-$scope
        var advertisementsDestroy = this;


        // Define the advertisementsDestroy functions and objects that will be passed to the view
        advertisementsDestroy.advertisement = {};                                                 // Object for show the advertisement
        advertisementsDestroy.destroy = destroy;                                         // Delete a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the advertisementsDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('advertisementsDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return advertisementsFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the advertisement
        function show(id) {

            return advertisementsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                advertisementsDestroy.advertisement = data;
                return advertisementsDestroy.advertisement;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the advertisementsIndexCtrl to the app
    angular
        .module('y')
        .controller('advertisementsIndexCtrl', advertisementsIndexCtrl);


    // Define the advertisementsIndexCtrl
    function advertisementsIndexCtrl(advertisementsFactory, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define advertisementsIndex as this for ControllerAs and auto-$scope
        var advertisementsIndex = this;


        // Define the advertisementsIndex functions and objects that will be passed to the view
        advertisementsIndex.advertisements = [];                                              // Array for list of advertisements


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        index();

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the advertisementsIndexCtrl
        |
        */

        advertisementsIndex.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Sample for init function
        function initLog() {

            console.log('advertisementsIndexCtrl init');
        }


        // Get all advertisements.
        function index() {

            return advertisementsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            advertisementsIndex.advertisements = data.data;
	            return advertisementsIndex.advertisements;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the advertisementsShowCtrl to the app
    angular
        .module('y')
        .controller('advertisementsShowCtrl', advertisementsShowCtrl);


    // Define the advertisementsShowCtrl
    function advertisementsShowCtrl(advertisementsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define advertisementsShow as this for ControllerAs and auto-$scope
        var advertisementsShow = this;


        // Define the advertisementsShow functions and objects that will be passed to the view
        advertisementsShow.advertisement = {};                                                // Object for show the advertisement


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the advertisementsShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('advertisementsShowCtrl init');
        }


        // Get the advertisement
        function show(id) {

            return advertisementsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            advertisementsShow.advertisement = data;
	            return advertisementsShow.advertisement;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the advertisementsStoreCtrl to the app
    angular
        .module('y')
        .controller('advertisementsStoreCtrl', advertisementsStoreCtrl);


    // Define the advertisementsStoreCtrl
    function advertisementsStoreCtrl(advertisementsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define advertisementsStore as this for ControllerAs and auto-$scope
        var advertisementsStore = this;


        // Define the advertisementsStore functions and objects that will be passed to the view
        advertisementsStore.store = store;                                           // Store a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the advertisementsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('advertisementsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return advertisementsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the advertisementsUpdateCtrl to the app
    angular
        .module('y')
        .controller('advertisementsUpdateCtrl', advertisementsUpdateCtrl);


    // Define the advertisementsUpdateCtrl
    function advertisementsUpdateCtrl(advertisementsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define advertisementsUpdate as this for ControllerAs and auto-$scope
        var advertisementsUpdate = this;


        // Define the advertisementsUpdate functions and objects that will be passed to the view
        advertisementsUpdate.advertisement = {};                                                  // Object for show the advertisement
        advertisementsUpdate.update = update;                                            // Update a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the advertisementsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('advertisementsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return advertisementsFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the advertisement
        function show(id) {

            return advertisementsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                advertisementsUpdate.advertisement = data;
                return advertisementsUpdate.advertisement;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the amountsDestroyCtrl to the app
    angular
        .module('y')
        .controller('amountsDestroyCtrl', amountsDestroyCtrl);


    // Define the amountsDestroyCtrl
    function amountsDestroyCtrl(amountsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define amountsDestroy as this for ControllerAs and auto-$scope
        var amountsDestroy = this;


        // Define the amountsDestroy functions and objects that will be passed to the view
        amountsDestroy.amount = {};                                                 // Object for show the amount
        amountsDestroy.destroy = destroy;                                         // Delete a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the amountsDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('amountsDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return amountsFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the amount
        function show(id) {

            return amountsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                amountsDestroy.amount = data;
                return amountsDestroy.amount;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the amountsIndexCtrl to the app
    angular
        .module('y')
        .controller('amountsIndexCtrl', amountsIndexCtrl);


    // Define the amountsIndexCtrl
    function amountsIndexCtrl(amountsFactory, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define amountsIndex as this for ControllerAs and auto-$scope
        var amountsIndex = this;


        // Define the amountsIndex functions and objects that will be passed to the view
        amountsIndex.amounts = [];                                              // Array for list of amounts


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        index();

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the amountsIndexCtrl
        |
        */

        amountsIndex.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Sample for init function
        function initLog() {

            console.log('amountsIndexCtrl init');
        }


        // Get all amounts.
        function index() {

            return amountsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            amountsIndex.amounts = data.data;
	            return amountsIndex.amounts;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the amountsShowCtrl to the app
    angular
        .module('y')
        .controller('amountsShowCtrl', amountsShowCtrl);


    // Define the amountsShowCtrl
    function amountsShowCtrl(amountsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define amountsShow as this for ControllerAs and auto-$scope
        var amountsShow = this;


        // Define the amountsShow functions and objects that will be passed to the view
        amountsShow.amount = {};                                                // Object for show the amount


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the amountsShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('amountsShowCtrl init');
        }


        // Get the amount
        function show(id) {

            return amountsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            amountsShow.amount = data;
	            return amountsShow.amount;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the amountsStoreCtrl to the app
    angular
        .module('y')
        .controller('amountsStoreCtrl', amountsStoreCtrl);


    // Define the amountsStoreCtrl
    function amountsStoreCtrl(amountsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define amountsStore as this for ControllerAs and auto-$scope
        var amountsStore = this;


        // Define the amountsStore functions and objects that will be passed to the view
        amountsStore.store = store;                                           // Store a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the amountsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('amountsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return amountsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the amountsUpdateCtrl to the app
    angular
        .module('y')
        .controller('amountsUpdateCtrl', amountsUpdateCtrl);


    // Define the amountsUpdateCtrl
    function amountsUpdateCtrl(amountsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define amountsUpdate as this for ControllerAs and auto-$scope
        var amountsUpdate = this;


        // Define the amountsUpdate functions and objects that will be passed to the view
        amountsUpdate.amount = {};                                                  // Object for show the amount
        amountsUpdate.update = update;                                            // Update a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the amountsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('amountsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return amountsFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the amount
        function show(id) {

            return amountsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                amountsUpdate.amount = data;
                return amountsUpdate.amount;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the articlesDestroyCtrl to the app
    angular
        .module('y')
        .controller('articlesDestroyCtrl', articlesDestroyCtrl);


    // Define the articlesDestroyCtrl
    function articlesDestroyCtrl(articlesFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define articlesDestroy as this for ControllerAs and auto-$scope
        var articlesDestroy = this;


        // Define the articlesDestroy functions and objects that will be passed to the view
        articlesDestroy.article = {};                                                 // Object for show the article
        articlesDestroy.destroy = destroy;                                         // Delete a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the articlesDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('articlesDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return articlesFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the article
        function show(id) {

            return articlesFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                articlesDestroy.article = data;
                return articlesDestroy.article;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the articlesIndexCtrl to the app
    angular
        .module('y')
        .controller('articlesIndexCtrl', articlesIndexCtrl);


    // Define the articlesIndexCtrl
    function articlesIndexCtrl(articlesFactory, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define articlesIndex as this for ControllerAs and auto-$scope
        var articlesIndex = this;


        // Define the articlesIndex functions and objects that will be passed to the view
        articlesIndex.articles = [];                                              // Array for list of articles


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        index();

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the articlesIndexCtrl
        |
        */

        articlesIndex.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Sample for init function
        function initLog() {

            console.log('articlesIndexCtrl init');
        }


        // Get all articles.
        function index() {

            return articlesFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            articlesIndex.articles = data.data;
	            return articlesIndex.articles;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the articlesShowCtrl to the app
    angular
        .module('y')
        .controller('articlesShowCtrl', articlesShowCtrl);


    // Define the articlesShowCtrl
    function articlesShowCtrl(articlesFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define articlesShow as this for ControllerAs and auto-$scope
        var articlesShow = this;


        // Define the articlesShow functions and objects that will be passed to the view
        articlesShow.article = {};                                                // Object for show the article


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the articlesShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('articlesShowCtrl init');
        }


        // Get the article
        function show(id) {

            return articlesFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            articlesShow.article = data;
	            return articlesShow.article;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the articlesStoreCtrl to the app
    angular
        .module('y')
        .controller('articlesStoreCtrl', articlesStoreCtrl);


    // Define the articlesStoreCtrl
    function articlesStoreCtrl(articlesFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define articlesStore as this for ControllerAs and auto-$scope
        var articlesStore = this;


        // Define the articlesStore functions and objects that will be passed to the view
        articlesStore.store = store;                                           // Store a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the articlesStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('articlesStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return articlesFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the articlesUpdateCtrl to the app
    angular
        .module('y')
        .controller('articlesUpdateCtrl', articlesUpdateCtrl);


    // Define the articlesUpdateCtrl
    function articlesUpdateCtrl(articlesFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define articlesUpdate as this for ControllerAs and auto-$scope
        var articlesUpdate = this;


        // Define the articlesUpdate functions and objects that will be passed to the view
        articlesUpdate.article = {};                                                  // Object for show the article
        articlesUpdate.update = update;                                            // Update a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the articlesUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('articlesUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return articlesFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the article
        function show(id) {

            return articlesFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                articlesUpdate.article = data;
                return articlesUpdate.article;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the billsDestroyCtrl to the app
    angular
        .module('y')
        .controller('billsDestroyCtrl', billsDestroyCtrl);


    // Define the billsDestroyCtrl
    function billsDestroyCtrl(billsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define billsDestroy as this for ControllerAs and auto-$scope
        var billsDestroy = this;


        // Define the billsDestroy functions and objects that will be passed to the view
        billsDestroy.bill = {};                                                 // Object for show the bill
        billsDestroy.destroy = destroy;                                         // Delete a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the billsDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('billsDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return billsFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the bill
        function show(id) {

            return billsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                billsDestroy.bill = data;
                return billsDestroy.bill;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the billsIndexCtrl to the app
    angular
        .module('y')
        .controller('billsIndexCtrl', billsIndexCtrl);


    // Define the billsIndexCtrl
    function billsIndexCtrl(billsFactory, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define billsIndex as this for ControllerAs and auto-$scope
        var billsIndex = this;


        // Define the billsIndex functions and objects that will be passed to the view
        billsIndex.bills = [];                                              // Array for list of bills


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        index();

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the billsIndexCtrl
        |
        */

        billsIndex.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Sample for init function
        function initLog() {

            console.log('billsIndexCtrl init');
        }


        // Get all bills.
        function index() {

            return billsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            billsIndex.bills = data.data;
	            return billsIndex.bills;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the billsShowCtrl to the app
    angular
        .module('y')
        .controller('billsShowCtrl', billsShowCtrl);


    // Define the billsShowCtrl
    function billsShowCtrl(billsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define billsShow as this for ControllerAs and auto-$scope
        var billsShow = this;


        // Define the billsShow functions and objects that will be passed to the view
        billsShow.bill = {};                                                // Object for show the bill


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the billsShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('billsShowCtrl init');
        }


        // Get the bill
        function show(id) {

            return billsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            billsShow.bill = data;
	            return billsShow.bill;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the billsStoreCtrl to the app
    angular
        .module('y')
        .controller('billsStoreCtrl', billsStoreCtrl);


    // Define the billsStoreCtrl
    function billsStoreCtrl(billsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define billsStore as this for ControllerAs and auto-$scope
        var billsStore = this;


        // Define the billsStore functions and objects that will be passed to the view
        billsStore.store = store;                                           // Store a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the billsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('billsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return billsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the billsUpdateCtrl to the app
    angular
        .module('y')
        .controller('billsUpdateCtrl', billsUpdateCtrl);


    // Define the billsUpdateCtrl
    function billsUpdateCtrl(billsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define billsUpdate as this for ControllerAs and auto-$scope
        var billsUpdate = this;


        // Define the billsUpdate functions and objects that will be passed to the view
        billsUpdate.bill = {};                                                  // Object for show the bill
        billsUpdate.update = update;                                            // Update a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the billsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('billsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return billsFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the bill
        function show(id) {

            return billsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                billsUpdate.bill = data;
                return billsUpdate.bill;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {
  'use strict';

    // Pass the staticsHomeCtrl to the app
    angular
        .module('y')
        .controller('biodynamicsHomeCtrl', biodynamicsHomeCtrl);

    // Define the staticsHomeCtrl
    function biodynamicsHomeCtrl() {
        // Inject with ng-annotate
        "ngInject";

        // Define staticsHome as this for ControllerAs and auto-$scope
        var biodynamicsHome = this;
            biodynamicsHome.title =    "Tree app";

            biodynamicsHome.nodes = [
                {data: {id: "a", name:"1"}},
                {data: {id: "b", name:"2"}},
                {data: {id: "c", name:"3"}},
                {data: {id: "d", name:"4"}},
                {data: {id: "e", name:"5"}},
                {data: {id: "f", name:"6"}},
                {data: {id: "g", name:"7"}}
            ];

            biodynamicsHome.relations = [
                {
                    data: {
                        source: "a",
                        target: "b"
                    }
                },{
                    data: {
                        source: "a",
                        target: "c"
                    }
                },{
                    data: {
                        source: "b",
                        target: "d"
                    }
                },{
                    data: {
                        source: "b",
                        target: "e"
                    }
                },{
                    data: {
                        source: "c",
                        target: "f"
                    }
                },{
                    data: {
                        source: "c",
                        target: "g"
                    }
                }
            ];
    }
})();

(function(){
	"use strict";

	var app = angular.module("core.cookie");

	app.config(["$cookiesProvider", function($cookie){
		/*
		 * Set cookies to expire in 1 month
		 */
		
		// define current date
		var current = new Date();

		// define 1 month later date
		var later = new Date(new Date(current).setMonth(current.getMonth() + 1));

		// Set cookie expiration
		$cookie.expires = later;
	}]);
})();
// (function(){

// 	'use strict';

// 	// Pass the mockHelperProvider to the app
// 	angular
// 		.module('core.mocking')
// 		.provider('mockHelper', mockHelperProvider);


//     // Define the mockHelperProvider
// 	function mockHelperProvider() {


// 		// Holds the service factory function
// 		this.$get = MockHelper;


// 		// Define the mockHelperProvider
// 		function MockHelper($httpBackend) {


// 			// Inject with ng-annotate
// 			"ngInject";


// 			// Pass through this extension
// 			$httpBackend.whenGET(/\.html$/).passThrough();
// 			$httpBackend.whenGET(/\.png$/).passThrough();
// 			$httpBackend.whenGET(/\.svg$/).passThrough();
// 			$httpBackend.whenGET(/\.jpg$/).passThrough();
// 			$httpBackend.whenGET(/\.jpeg$/).passThrough();
// 			$httpBackend.whenGET(/\.css$/).passThrough();


// 			// Define the object to return
// 			var service = {

// 				configureMocks: configureMocks,		// Configure all the states for the route
// 			};


// 			// Return the object
// 			return service;


// 	        /*
// 	        |--------------------------------------------------------------------------
// 	        | Functions
// 	        |--------------------------------------------------------------------------
// 	        |
// 	        | Declaring all functions used in the MockHelper
// 	        |
// 	        */


// 			// Configure all the mocks for the route
// 			function configureMocks(mocks) {

// 				// Foreach mocks, create a fake backend interaction
// 				// mocks.forEach(function(mock){

// 				// 	$httpBackend.when(mock.method, mock.url).respond(mock.respond);
// 				// });
// 			}
// 		}
// 	}

// })();

(function(){
	'use strict';

	// Pass the configuration theming to the app
	var app = angular
            .module('core.rest');
      // Define global domain for resource
      app.config(["ngRestful", function($restful){
        $restful.setDomain("http://api.unn.com.ve");
      }]);
})();
(function(){

	'use strict';

	// Pass the routerHelperProvider to the app
	angular
		.module('core.routing')
		.provider('routerHelper', routerHelperProvider);


    // Define the routerHelperProvider
	function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {


		// Inject with ng-annotate
		"ngInject";


		// Holds the service factory function
		this.$get = RouterHelper;


		// Declare html5Mode true for a clean url
		$locationProvider.html5Mode(true);


		// Declare strict to false for remove trailing slash
		$urlMatcherFactoryProvider.strictMode(false);


		// Declare the otherwise, go here if no state is found
		$urlRouterProvider.otherwise('/404');


		// Define the routerHelperProvider
		function RouterHelper($state) {


			// Define the object to return
			var service = {

				configureStates: configureStates,			// Configure all the states for the route
				getStates: getStates 						// Return the lists of states

			};


			// Return the object
			return service;


	        /*
	        |--------------------------------------------------------------------------
	        | Functions
	        |--------------------------------------------------------------------------
	        |
	        | Declaring all functions used in the RouterHelper
	        |
	        */


			// Configure all the states for the route
			function configureStates(states) {

				// Add to the routing the state passed trought array of objects
				states.forEach(function(state) {

					$stateProvider.state(state.state, state.config);

				});
			}


			// Return the lists of states
			function getStates() {

				return $state.get();
			}
		}
	}

})();

(function(){

	'use strict';

	// Pass the configuration theming to the app
	var app = angular
            .module('core.theming');
    app.config(['$mdThemingProvider', function($mdThemingProvider){
	   $mdThemingProvider.definePalette('red-wine', {
		   '50':'82142d',
		   '100': 'ffcdd2',
    	   '200': 'ef9a9a',
		   '300': 'e57373',
  		   '400': 'ef5350',
		   '500': 'f44336',
		   '600': 'e53935',
		   '700': 'd32f2f',
		   '800': 'c62828',
	 	   '900': 'b71c1c',
		   'A100': 'ff8a80',
		   'A200': 'ff5252',
		   'A400': 'ff1744',
		   'A700': 'd50000',
		   'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
											// on this palette should be dark or light
     	   'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
		 	'200', '300', '400', 'A100'],
		   'contrastLightColors': undefined    // could also specify this if default was 'dark'
	   });
       $mdThemingProvider.theme('default')
         .primaryPalette('blue',{
            'default':'600'
       })
         .accentPalette('light-green',{
            'default':'500' 
       })
         .warnPalette('red-wine',{
            'default':'50'
       });
    }]);
   
    // Define the routerHelperProvider
	

})();

(function() {

    'use strict';

    // Pass the validatorHelperProvider to the app
    angular
        .module('core.validator')
        .provider('validatorHelper', validatorHelperProvider);


    // Define the validatorHelperProvider
    function validatorHelperProvider(valdrProvider, valdrMessageProvider) {


        // Inject with ng-annotate
        "ngInject";


        // Holds the service factory function
        this.$get = validatorHelper;


        // Define the validatorHelperProvider
        function validatorHelper() {


            valdrMessageProvider.setTemplate('<div class="valdr-message">{{ violation.message }}</div>');

            // Define the object to return
            var service = {

                configureValidators: configureValidators, // Configure all models to validate
            };


            // Return the object
            return service;


            /*
            |--------------------------------------------------------------------------
            | Functions
            |--------------------------------------------------------------------------
            |
            | Declaring all functions used in the ValidatorHelper
            |
            */


            // Configure all the validators for the models
            function configureValidators(validator) {

                valdrProvider.addConstraints(validator);
            }
        }
    }

})();

(function() {

  'use strict';

    // Pass the documentsDestroyCtrl to the app
    angular
        .module('y')
        .controller('documentsDestroyCtrl', documentsDestroyCtrl);


    // Define the documentsDestroyCtrl
    function documentsDestroyCtrl(documentsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define documentsDestroy as this for ControllerAs and auto-$scope
        var documentsDestroy = this;


        // Define the documentsDestroy functions and objects that will be passed to the view
        documentsDestroy.document = {};                                                 // Object for show the document
        documentsDestroy.destroy = destroy;                                         // Delete a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the documentsDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('documentsDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return documentsFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the document
        function show(id) {

            return documentsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                documentsDestroy.document = data;
                return documentsDestroy.document;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the documentsIndexCtrl to the app
    angular
        .module('y')
        .controller('documentsIndexCtrl', documentsIndexCtrl);


    // Define the documentsIndexCtrl
    function documentsIndexCtrl(documentsFactory, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define documentsIndex as this for ControllerAs and auto-$scope
        var documentsIndex = this;


        // Define the documentsIndex functions and objects that will be passed to the view
        documentsIndex.documents = [];                                              // Array for list of documents


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        index();

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the documentsIndexCtrl
        |
        */

        documentsIndex.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Sample for init function
        function initLog() {

            console.log('documentsIndexCtrl init');
        }


        // Get all documents.
        function index() {

            return documentsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            documentsIndex.documents = data.data;
	            return documentsIndex.documents;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the documentsShowCtrl to the app
    angular
        .module('y')
        .controller('documentsShowCtrl', documentsShowCtrl);


    // Define the documentsShowCtrl
    function documentsShowCtrl(documentsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define documentsShow as this for ControllerAs and auto-$scope
        var documentsShow = this;


        // Define the documentsShow functions and objects that will be passed to the view
        documentsShow.document = {};                                                // Object for show the document


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the documentsShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('documentsShowCtrl init');
        }


        // Get the document
        function show(id) {

            return documentsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            documentsShow.document = data;
	            return documentsShow.document;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the documentsStoreCtrl to the app
    angular
        .module('y')
        .controller('documentsStoreCtrl', documentsStoreCtrl);


    // Define the documentsStoreCtrl
    function documentsStoreCtrl(documentsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define documentsStore as this for ControllerAs and auto-$scope
        var documentsStore = this;


        // Define the documentsStore functions and objects that will be passed to the view
        documentsStore.store = store;                                           // Store a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the documentsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('documentsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return documentsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the documentsUpdateCtrl to the app
    angular
        .module('y')
        .controller('documentsUpdateCtrl', documentsUpdateCtrl);


    // Define the documentsUpdateCtrl
    function documentsUpdateCtrl(documentsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define documentsUpdate as this for ControllerAs and auto-$scope
        var documentsUpdate = this;


        // Define the documentsUpdate functions and objects that will be passed to the view
        documentsUpdate.document = {};                                                  // Object for show the document
        documentsUpdate.update = update;                                            // Update a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the documentsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('documentsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return documentsFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the document
        function show(id) {

            return documentsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                documentsUpdate.document = data;
                return documentsUpdate.document;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {
  'use strict';

    // Pass the staticsHomeCtrl to the app
    angular
        .module('y')
        .controller('dynamicsHomeCtrl', dynamicsHomeCtrl);

    // Define the staticsHomeCtrl
    function dynamicsHomeCtrl() {
        // Inject with ng-annotate
        "ngInject";

        // Define staticsHome as this for ControllerAs and auto-$scope
        var dynamicsHome = this;
            dynamicsHome.title =    "Tree app";

            dynamicsHome.nodes = [
                {data: {id: "a", name:"1"}},
                {data: {id: "b", name:"2"}},
                {data: {id: "c", name:"3"}},
                {data: {id: "d", name:"4"}},
                {data: {id: "e", name:"5"}},
                {data: {id: "f", name:"6"}},
                {data: {id: "g", name:"7"}}
            ];

            dynamicsHome.relations = [
                {
                    data: {
                        source: "a",
                        target: "b"
                    }
                },{
                    data: {
                        source: "a",
                        target: "c"
                    }
                },{
                    data: {
                        source: "b",
                        target: "d"
                    }
                },{
                    data: {
                        source: "b",
                        target: "e"
                    }
                },{
                    data: {
                        source: "c",
                        target: "f"
                    }
                },{
                    data: {
                        source: "c",
                        target: "g"
                    }
                }
            ];
    }
})();

(function() {

  'use strict';

    // Pass the staticsHomeCtrl to the app
    angular
        .module('y')
        .controller('estaticoHomeCtrl', estaticoHomeCtrl);


    // Define the staticsHomeCtrl
    function estaticoHomeCtrl($scope, $state) {
		
		$scope.$on("user.login", function(event, success, data){
			if (success == true ){
				if( data.role == "admin" ){
					$state.go('biodynamics-home')
				} 
				else{
					$state.go('dynamics-home')
				}
			} 
		})

        // Inject with ng-annotate
        "ngInject";


        // Define staticsHome as this for ControllerAs and auto-$scope
        var estaticoHome = this;
            estaticoHome.title =    "AngularJS-boilerplate";
            estaticoHome.content =  "A micro AngularJS boilerplate for start projects with mocking and routing modules ready, based on John Papa's style guide";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the staticsHomeCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('estaticoHomeCtrl init');
        }
    }

})();

(function() {

  'use strict';

    // Pass the responsesDestroyCtrl to the app
    angular
        .module('y')
        .controller('responsesDestroyCtrl', responsesDestroyCtrl);


    // Define the responsesDestroyCtrl
    function responsesDestroyCtrl(responsesFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define responsesDestroy as this for ControllerAs and auto-$scope
        var responsesDestroy = this;


        // Define the responsesDestroy functions and objects that will be passed to the view
        responsesDestroy.response = {};                                                 // Object for show the response
        responsesDestroy.destroy = destroy;                                         // Delete a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the responsesDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('responsesDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return responsesFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the response
        function show(id) {

            return responsesFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                responsesDestroy.response = data;
                return responsesDestroy.response;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the responsesIndexCtrl to the app
    angular
        .module('y')
        .controller('responsesIndexCtrl', responsesIndexCtrl);


    // Define the responsesIndexCtrl
    function responsesIndexCtrl(responsesFactory, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define responsesIndex as this for ControllerAs and auto-$scope
        var responsesIndex = this;


        // Define the responsesIndex functions and objects that will be passed to the view
        responsesIndex.responses = [];                                              // Array for list of responses


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        index();

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the responsesIndexCtrl
        |
        */

        responsesIndex.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Sample for init function
        function initLog() {

            console.log('responsesIndexCtrl init');
        }


        // Get all responses.
        function index() {

            return responsesFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            responsesIndex.responses = data.data;
	            return responsesIndex.responses;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the responsesShowCtrl to the app
    angular
        .module('y')
        .controller('responsesShowCtrl', responsesShowCtrl);


    // Define the responsesShowCtrl
    function responsesShowCtrl(responsesFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define responsesShow as this for ControllerAs and auto-$scope
        var responsesShow = this;


        // Define the responsesShow functions and objects that will be passed to the view
        responsesShow.response = {};                                                // Object for show the response


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the responsesShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('responsesShowCtrl init');
        }


        // Get the response
        function show(id) {

            return responsesFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            responsesShow.response = data;
	            return responsesShow.response;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the responsesStoreCtrl to the app
    angular
        .module('y')
        .controller('responsesStoreCtrl', responsesStoreCtrl);


    // Define the responsesStoreCtrl
    function responsesStoreCtrl(responsesFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define responsesStore as this for ControllerAs and auto-$scope
        var responsesStore = this;


        // Define the responsesStore functions and objects that will be passed to the view
        responsesStore.store = store;                                           // Store a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the responsesStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('responsesStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return responsesFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the responsesUpdateCtrl to the app
    angular
        .module('y')
        .controller('responsesUpdateCtrl', responsesUpdateCtrl);


    // Define the responsesUpdateCtrl
    function responsesUpdateCtrl(responsesFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define responsesUpdate as this for ControllerAs and auto-$scope
        var responsesUpdate = this;


        // Define the responsesUpdate functions and objects that will be passed to the view
        responsesUpdate.response = {};                                                  // Object for show the response
        responsesUpdate.update = update;                                            // Update a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the responsesUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('responsesUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return responsesFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the response
        function show(id) {

            return responsesFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                responsesUpdate.response = data;
                return responsesUpdate.response;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the staticsDestroyCtrl to the app
    angular
        .module('y')
        .controller('staticsDestroyCtrl', staticsDestroyCtrl);


    // Define the staticsDestroyCtrl
    function staticsDestroyCtrl(staticsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define staticsDestroy as this for ControllerAs and auto-$scope
        var staticsDestroy = this;


        // Define the staticsDestroy functions and objects that will be passed to the view
        staticsDestroy.static = {};                                                 // Object for show the static
        staticsDestroy.destroy = destroy;                                         // Delete a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the staticsDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('staticsDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return staticsFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the static
        function show(id) {

            return staticsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                staticsDestroy.static = data;
                return staticsDestroy.static;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {
  'use strict';

    // Pass the staticsHomeCtrl to the app
    angular
        .module('y')
        .controller('staticsHomeCtrl', staticsHomeCtrl);

    // Define the staticsHomeCtrl
    function staticsHomeCtrl(userService, $scope){

        // Inject with ng-annotate
        "ngInject";

        // Define staticsHome as this for ControllerAs and auto-$scope
        var staticsHome = this;
            staticsHome.title =    "Tree app";
            staticsHome.sideMenu = false;

            $scope.$on("user.login", function(ev, success, data){
                if(data){
                    staticsHome.sideMenu = (data.role == "admin");
                }
            });

            staticsHome.nodes = [
                {data: {id: "a", name:"1"}},
                {data: {id: "b", name:"2"}},
                {data: {id: "c", name:"3"}},
                {data: {id: "d", name:"4"}},
                {data: {id: "e", name:"5"}},
                {data: {id: "f", name:"6"}},
                {data: {id: "g", name:"7"}}
            ];

            staticsHome.relations = [
                {
                    data: {
                        source: "a",
                        target: "b"
                    }
                },{
                    data: {
                        source: "a",
                        target: "c"
                    }
                },{
                    data: {
                        source: "b",
                        target: "d"
                    }
                },{
                    data: {
                        source: "b",
                        target: "e"
                    }
                },{
                    data: {
                        source: "c",
                        target: "f"
                    }
                },{
                    data: {
                        source: "c",
                        target: "g"
                    }
                }
            ];
    }
})();

(function() {

  'use strict';

    // Pass the staticsIndexCtrl to the app
    angular
        .module('y')
        .controller('staticsIndexCtrl', staticsIndexCtrl);


    // Define the staticsIndexCtrl
    function staticsIndexCtrl(staticsFactory, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define staticsIndex as this for ControllerAs and auto-$scope
        var staticsIndex = this;


        // Define the staticsIndex functions and objects that will be passed to the view
        staticsIndex.statics = [];                                              // Array for list of statics


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        index();

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the staticsIndexCtrl
        |
        */

        staticsIndex.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Sample for init function
        function initLog() {

            console.log('staticsIndexCtrl init');
        }


        // Get all statics.
        function index() {

            return staticsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            staticsIndex.statics = data.data;
	            return staticsIndex.statics;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the staticsShowCtrl to the app
    angular
        .module('y')
        .controller('staticsShowCtrl', staticsShowCtrl);


    // Define the staticsShowCtrl
    function staticsShowCtrl(staticsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define staticsShow as this for ControllerAs and auto-$scope
        var staticsShow = this;


        // Define the staticsShow functions and objects that will be passed to the view
        staticsShow.static = {};                                                // Object for show the static


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the staticsShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('staticsShowCtrl init');
        }


        // Get the static
        function show(id) {

            return staticsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            staticsShow.static = data;
	            return staticsShow.static;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the staticsStoreCtrl to the app
    angular
        .module('y')
        .controller('staticsStoreCtrl', staticsStoreCtrl);


    // Define the staticsStoreCtrl
    function staticsStoreCtrl(staticsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define staticsStore as this for ControllerAs and auto-$scope
        var staticsStore = this;


        // Define the staticsStore functions and objects that will be passed to the view
        staticsStore.store = store;                                           // Store a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the staticsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('staticsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return staticsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the staticsUpdateCtrl to the app
    angular
        .module('y')
        .controller('staticsUpdateCtrl', staticsUpdateCtrl);


    // Define the staticsUpdateCtrl
    function staticsUpdateCtrl(staticsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define staticsUpdate as this for ControllerAs and auto-$scope
        var staticsUpdate = this;


        // Define the staticsUpdate functions and objects that will be passed to the view
        staticsUpdate.static = {};                                                  // Object for show the static
        staticsUpdate.update = update;                                            // Update a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the staticsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('staticsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return staticsFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the static
        function show(id) {

            return staticsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                staticsUpdate.static = data;
                return staticsUpdate.static;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the ticketsDestroyCtrl to the app
    angular
        .module('y')
        .controller('ticketsDestroyCtrl', ticketsDestroyCtrl);


    // Define the ticketsDestroyCtrl
    function ticketsDestroyCtrl(ticketsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define ticketsDestroy as this for ControllerAs and auto-$scope
        var ticketsDestroy = this;


        // Define the ticketsDestroy functions and objects that will be passed to the view
        ticketsDestroy.ticket = {};                                                 // Object for show the ticket
        ticketsDestroy.destroy = destroy;                                         // Delete a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the ticketsDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('ticketsDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return ticketsFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the ticket
        function show(id) {

            return ticketsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                ticketsDestroy.ticket = data;
                return ticketsDestroy.ticket;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the ticketsIndexCtrl to the app
    angular
        .module('y')
        .controller('ticketsIndexCtrl', ticketsIndexCtrl);


    // Define the ticketsIndexCtrl
    function ticketsIndexCtrl(ticketsFactory, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define ticketsIndex as this for ControllerAs and auto-$scope
        var ticketsIndex = this;


        // Define the ticketsIndex functions and objects that will be passed to the view
        ticketsIndex.tickets = [];                                              // Array for list of tickets


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        index();

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the ticketsIndexCtrl
        |
        */

        ticketsIndex.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Sample for init function
        function initLog() {

            console.log('ticketsIndexCtrl init');
        }


        // Get all tickets.
        function index() {

            return ticketsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            ticketsIndex.tickets = data.data;
	            return ticketsIndex.tickets;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the ticketsShowCtrl to the app
    angular
        .module('y')
        .controller('ticketsShowCtrl', ticketsShowCtrl);


    // Define the ticketsShowCtrl
    function ticketsShowCtrl(ticketsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define ticketsShow as this for ControllerAs and auto-$scope
        var ticketsShow = this;


        // Define the ticketsShow functions and objects that will be passed to the view
        ticketsShow.ticket = {};                                                // Object for show the ticket


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the ticketsShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('ticketsShowCtrl init');
        }


        // Get the ticket
        function show(id) {

            return ticketsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            ticketsShow.ticket = data;
	            return ticketsShow.ticket;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the ticketsStoreCtrl to the app
    angular
        .module('y')
        .controller('ticketsStoreCtrl', ticketsStoreCtrl);


    // Define the ticketsStoreCtrl
    function ticketsStoreCtrl(ticketsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define ticketsStore as this for ControllerAs and auto-$scope
        var ticketsStore = this;


        // Define the ticketsStore functions and objects that will be passed to the view
        ticketsStore.store = store;                                           // Store a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the ticketsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('ticketsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return ticketsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the ticketsUpdateCtrl to the app
    angular
        .module('y')
        .controller('ticketsUpdateCtrl', ticketsUpdateCtrl);


    // Define the ticketsUpdateCtrl
    function ticketsUpdateCtrl(ticketsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define ticketsUpdate as this for ControllerAs and auto-$scope
        var ticketsUpdate = this;


        // Define the ticketsUpdate functions and objects that will be passed to the view
        ticketsUpdate.ticket = {};                                                  // Object for show the ticket
        ticketsUpdate.update = update;                                            // Update a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the ticketsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('ticketsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return ticketsFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the ticket
        function show(id) {

            return ticketsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                ticketsUpdate.ticket = data;
                return ticketsUpdate.ticket;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the usersDestroyCtrl to the app
    angular
        .module('y')
        .controller('usersDestroyCtrl', usersDestroyCtrl);


    // Define the usersDestroyCtrl
    function usersDestroyCtrl(usersFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define usersDestroy as this for ControllerAs and auto-$scope
        var usersDestroy = this;


        // Define the usersDestroy functions and objects that will be passed to the view
        usersDestroy.user = {};                                                 // Object for show the user
        usersDestroy.destroy = destroy;                                         // Delete a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('usersDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return usersFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the user
        function show(id) {

            return usersFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                usersDestroy.user = data;
                return usersDestroy.user;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the usersIndexCtrl to the app
    angular
        .module('y')
        .controller('usersIndexCtrl', usersIndexCtrl);


    // Define the usersIndexCtrl
    function usersIndexCtrl(usersFactory, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define usersIndex as this for ControllerAs and auto-$scope
        var usersIndex = this;


        // Define the usersIndex functions and objects that will be passed to the view
        usersIndex.users = [];                                              // Array for list of users


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        index();

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersIndexCtrl
        |
        */

        usersIndex.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }


        // Sample for init function
        function initLog() {

            console.log('usersIndexCtrl init');
        }


        // Get all users.
        function index() {

            return usersFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            usersIndex.users = data.data;
	            return usersIndex.users;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the usersShowCtrl to the app
    angular
        .module('y')
        .controller('usersShowCtrl', usersShowCtrl);


    // Define the usersShowCtrl
    function usersShowCtrl(usersFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define usersShow as this for ControllerAs and auto-$scope
        var usersShow = this;


        // Define the usersShow functions and objects that will be passed to the view
        usersShow.user = {};                                                // Object for show the user


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('usersShowCtrl init');
        }


        // Get the user
        function show(id) {

            return usersFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            usersShow.user = data;
	            return usersShow.user;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the usersStoreCtrl to the app
    angular
        .module('y')
        .controller('usersStoreCtrl', usersStoreCtrl);


    // Define the usersStoreCtrl
    function usersStoreCtrl(usersFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define usersStore as this for ControllerAs and auto-$scope
        var usersStore = this;


        // Define the usersStore functions and objects that will be passed to the view
        usersStore.store = store;                                           // Store a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('usersStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return usersFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the usersUpdateCtrl to the app
    angular
        .module('y')
        .controller('usersUpdateCtrl', usersUpdateCtrl);


    // Define the usersUpdateCtrl
    function usersUpdateCtrl(usersFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define usersUpdate as this for ControllerAs and auto-$scope
        var usersUpdate = this;


        // Define the usersUpdate functions and objects that will be passed to the view
        usersUpdate.user = {};                                                  // Object for show the user
        usersUpdate.update = update;                                            // Update a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('usersUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return usersFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the user
        function show(id) {

            return usersFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                usersUpdate.user = data;
                return usersUpdate.user;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the footerDirective to the app
    angular
        .module('y')
        .directive('footerDirective', footerDirective);


    // Define the footerDirective
    function footerDirective() {

        // Define directive
        var directive = {

                restrict: 'EA',
                templateUrl: 'app/shared/components/footer-component/footer-component.html',
                scope: {
                    footerString: '@',                      // Isolated scope string
                    footerAttribute: '=',                   // Isolated scope two-way data binding
                    footerAction: '&'                       // Isolated scope action
                },
                link: linkFunc,
                controller: footerDirectiveController,
                controllerAs: 'footerDirective'
        };

        // Return directive
        return directive;

        // Define link function
        function linkFunc(scope, el, attr, ctrl) {

            // Do stuff...
        }
    }

    // Define directive controller
    function footerDirectiveController($scope) {
		$scope.twitter='http://www.twitter.com',
		$scope.facebook='http://www.facebook.com'
        // Do stuff...
    }

})();

(function() {

  'use strict';

    // Pass the navbarDirective to the app
    angular
        .module('y')
        .directive('navbarDirective', navbarDirective);


    // Define the navbarDirective
    function navbarDirective() {

        // Define directive
        var directive = {
                restrict: 'EA',
                templateUrl: 'app/shared/components/navbar-component/navbar-component.html',
                scope: {
                    navbarString: '@',                      // Isolated scope string
                    navbarAttribute: '=',                   // Isolated scope two-way data binding
                    navbarAction: '&'                       // Isolated scope action
                },
                link: linkFunc,
                controller: navbarDirectiveController,
                controllerAs: 'navbarDirective'
        };

        // Return directive
        return directive;

        // Define link function
        function linkFunc(scope, el, attr, ctrl) {

            // Do stuff...
        }
    }

    // Define directive controller
    function navbarDirectiveController(userService, $scope) {
        var self = this;
        self.title = "Tree";
        self.guest = userService.isGuest;
        self.role = userService.getRole();

        self.disable = true;

        userService.cookieLogin(function(){
            self.disable = false;
        });

        self.login = function(){
            userService.login(self.form, function(err, success){
                if(err){
                    console.error(err);
                }

                if(success){
                    self.guest = !success;
                    self.role = userService.getRole();
                }
            });
        };

        $scope.$on("user.login", function(ev, success, data){
           if(success){
                self.guest = !success;
                self.role = userService.getRole();
            }
        });
    }
})();

(function() {

  'use strict';

    // Pass the sidenavDirective to the app
    angular
        .module('y')
        .directive('sidenavDirective', sidenavDirective);


    // Define the sidenavDirective
    function sidenavDirective() {

        // Define directive
        var directive = {

                restrict: 'EA',
                templateUrl: 'app/shared/components/sidenav-component/sidenav-component.html',
                scope: {
                    navbarString: '@',                      // Isolated scope string
                    navbarAttribute: '=',                   // Isolated scope two-way data binding
                    navbarAction: '&'                       // Isolated scope action
                },
                link: linkFunc,
                controller: sidenavDirectiveController,
                controllerAs: 'sidenavDirective'
        };

        // Return directive
        return directive;

        // Define link function
        function linkFunc(scope, el, attr, ctrl) {

            // Do stuff...
        }
    }

    // Define directive controller
    function sidenavDirectiveController(userService, $state) {
		
		this.home = function(){
			console.log("hola")
			var self = this;
        	self.guest = userService.isGuest;
        	self.role = userService.getRole();
			if(self.guest = "false"){
				if(self.role = "admin"){
					$state.go('biodynamics-home');
				}else{
					$state.go('dynamics-home');
				}
			}else{
				$state.go('estatico-home');
			}
		}
		
        this.logout = function(){
            userService.logout()
        }
    }
})();

(function() {

  'use strict';

    // Pass the treeDirective to the app
    angular
        .module('y')
        .directive('treeDirective', treeDirective);


    // Define the treeDirective
    function treeDirective() {

        // Define directive
        var directive = {
            restrict: 'E',
            template: '<div id="cy" style="height:500px; width:500px;"></div>',
            scope: {
                nodes: '=',
                relations: '='
            },
            controller: treeDirectiveController
        };

        // Return directive
        return directive;
    }

    // Define directive controller
    function treeDirectiveController($scope) {
        var container = angular.element(document.querySelector("#cy"));

        cytoscape({
            container: container,
            elements: $scope.nodes.concat($scope.relations),
            layout: {
                name: "breadthfirst",
                directed: true,
                padding: 30,
                avoidOverlap: true
            },
            style: [
            {
                selector: "node",
                style: {
                    shape: "circle",
                    "background-color": "red",
                    label: "data(name)"
                }
            }]
        });
    }
})();

(function() {

  'use strict';

    // Pass the accountsShowCtrl to the app
    angular
        .module('y')
        .controller('accountsShowCtrl', accountsShowCtrl);


    // Define the accountsShowCtrl
    function accountsShowCtrl(accountsFactory, $stateParams, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define accountsShow as this for ControllerAs and auto-$scope
        var accountsShow = this;


        // Define the accountsShow functions and objects that will be passed to the view
        accountsShow.account = {};                                                // Object for show the account


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the accountsShowCtrl
        |
        */

        accountsShow.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Sample for init function
        function initLog() {

            console.log('accountsShowCtrl init');
        }


        // Get the account
        function show(id) {

            return accountsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            accountsShow.account = data;
	            return accountsShow.account;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
