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
	angular.module('y', ['core.rest','core.routing','core.theming','core.validator','ngMaterial','ui.router','ngRestful']);

})();

(function() {

  'use strict';

    // Pass the accountsFactory to the app
    angular
        .module('y')
        .factory('accountsFactory', accountsFactory);


    // Define the accountsFactory
    function accountsFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for account account
        var accountBase = '/api/accounts/';


        // Define the account factory object to return
        var accountsFactory = {

            index: index,
            show: show,
            store: store,
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

            return $http.get(accountBase)
                        .then(function(data){ return data; });
        }


        // Display a specified account.
        function show(id) {

            return $http.get(accountBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created account in storage.
        function store(data) {

            return $http.post(accountBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified account in storage.
        function update(id, data) {

            return $http.put(accountBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified account from storage.
        function destroy(id) {

            return $http.delete(accountBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();

// (function() {

//   'use strict';

//     // Pass the accountsMock to the app
// 	angular
// 	    .module('y')
// 	    .run(accountsMock);


// 	// Define the accountsMock
//     function accountsMock(mockHelper) {


//         // Inject with ng-annotate
//         "ngInject";


//         // Object for account's mock
//         var accounts = {};


//         /*
//         |--------------------------------------------------------------------------
//         | Contrsucts function
//         |--------------------------------------------------------------------------
//         |
//         | All functions that should be init when the controller start
//         |
//         */


//     	setaccounts();															            // Set the list of account
//     	mockHelper.configureMocks(getMocks()); 									        // Intercept all the api and add them to the httpBackend



// 	    /*
// 	    |--------------------------------------------------------------------------
// 	    | Functions
// 	    |--------------------------------------------------------------------------
// 	    |
// 	    | Declaring all functions used in the accountsMock
// 	    |
// 	    */


// 		// Function for destroy accounts API
// 		function destroyRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Delete account by id from account's array
//                 for(var i = 0; i <= accounts.length - 1; i++) {

//                     // If account exists
//                     if(accounts[i].id == id) {

//                         // Delete  account
//                         accounts.splice(i, 1);

//                         // Return the success header
//                         return [header, {data: 'account removed'}];
//                     }
//                 }

// 				// Return the error header
//                 return [header, {error: 'account not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error in account removing'}];
// 		}


// 		// Function for index accounts API
// 		function indexRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

// 				// Return the success header
//                 return [header, {data: accounts}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error while listing accounts'}];
// 		}


// 		// Function for show accounts API
// 		function showRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get account by id from account's array
//                 for(var i = 0; i <= accounts.length - 1; i++) {

//                     // If account exists
//                     if(accounts[i].id == id) {

//                         // Return the success header
//                         return [header, {data: accounts[i]}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'account not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error showing account'}];
// 		}


// 		// Function for store accounts API
// 		function storeRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

//             // If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Assisgn account id - override if inserted
//                 data.id = accounts.length;

//                 // Insert the new account
//                 accounts.push(data);

//                 // Return the success header
//                 return [header, {data: 'account stored'}];
//             }

// 			// Return the error header
// 			return [header, {error:'Error storing the account'}];
// 		}


// 		// Function for update accounts API
// 		function updateRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get account by id from account's array
//                 for(var i = 0; i <= accounts.length - 1; i++) {

//                     // If account exists
//                     if(accounts[i].id == id) {

//                         // Override the account
//                         accounts[i] = data;

//                         // Return the success header
//                         return [header, {data: 'account updated'}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'account not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error updating account'}];
// 		}


// 		// Basic algorithm for random headers
// 		function randomHeader(){

// 			// Generate a random number from 1 to 10
// 			var random = Math.floor((Math.random() * 10) + 1);

// 			// Return 500 if random is 10
// 			if(random == 10) {

// 				return 500;
// 			}

// 			// Return 404 if random is 9
// 			if(random == 9) {

// 				return 404;
// 			}

// 			// Return 200
// 			return 200;
// 		}


// 		// Function that pass the array that will create the httpBackend
// 	    function getMocks() {

// 	    	// Object to pass for fake API
// 			return [{

// 				label: 'destroy',
// 			    method: 'DELETE',
// 			    url: /\/api\/accounts\/(d*)/,
// 			    params: ['id'],
// 			    respond: destroyRespond

// 			},{

// 				label: 'index',
// 			    method: 'GET',
// 			    url: '/api/accounts/',
// 			    respond: indexRespond

// 			},{

// 				label: 'show',
// 			    method: 'GET',
// 			    url: /\/api\/accounts\/(d*)/,
// 			    params: ['id'],
// 			    respond: showRespond

// 			},{

// 				label: 'store',
// 			    method: 'POST',
// 			    url: '/api/accounts/',
// 			    respond: storeRespond

// 			},{

// 				label: 'update',
// 			    method: 'PUT',
// 			    url: /\/api\/accounts\/(d*)/,
// 			    params: ['id'],
// 			    respond: updateRespond
// 			}];
// 		}


// 		// Function for set the array
// 		function setaccounts() {

//             accounts = [];
// 		}
// 	}

// })();

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

    // Pass the adminsFactory to the app
    angular
        .module('y')
        .factory('adminsFactory', adminsFactory);


    // Define the adminsFactory
    function adminsFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for admin admin
        var adminBase = '/api/admins/';


        // Define the admin factory object to return
        var adminsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the admin factory
        return adminsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the adminsFactory
        |
        */


        // Display a listing of admins.
        function index() {

            return $http.get(adminBase)
                        .then(function(data){ return data; });
        }


        // Display a specified admin.
        function show(id) {

            return $http.get(adminBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created admin in storage.
        function store(data) {

            return $http.post(adminBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified admin in storage.
        function update(id, data) {

            return $http.put(adminBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified admin from storage.
        function destroy(id) {

            return $http.delete(adminBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();

// (function() {

//   'use strict';

//     // Pass the adminsMock to the app
// 	angular
// 	    .module('y')
// 	    .run(adminsMock);


// 	// Define the adminsMock
//     function adminsMock(mockHelper) {


//         // Inject with ng-annotate
//         "ngInject";


//         // Object for admin's mock
//         var admins = {};


//         /*
//         |--------------------------------------------------------------------------
//         | Contrsucts function
//         |--------------------------------------------------------------------------
//         |
//         | All functions that should be init when the controller start
//         |
//         */


//     	setAdmins();															            // Set the list of admin
//     	mockHelper.configureMocks(getMocks()); 									        // Intercept all the api and add them to the httpBackend



// 	    /*
// 	    |--------------------------------------------------------------------------
// 	    | Functions
// 	    |--------------------------------------------------------------------------
// 	    |
// 	    | Declaring all functions used in the adminsMock
// 	    |
// 	    */


// 		// Function for destroy admins API
// 		function destroyRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Delete admin by id from admin's array
//                 for(var i = 0; i <= admins.length - 1; i++) {

//                     // If admin exists
//                     if(admins[i].id == id) {

//                         // Delete  admin
//                         admins.splice(i, 1);

//                         // Return the success header
//                         return [header, {data: 'Admin removed'}];
//                     }
//                 }

// 				// Return the error header
//                 return [header, {error: 'Admin not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error in admin removing'}];
// 		}


// 		// Function for index admins API
// 		function indexRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

// 				// Return the success header
//                 return [header, {data: admins}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error while listing admins'}];
// 		}


// 		// Function for show admins API
// 		function showRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get admin by id from admin's array
//                 for(var i = 0; i <= admins.length - 1; i++) {

//                     // If admin exists
//                     if(admins[i].id == id) {

//                         // Return the success header
//                         return [header, {data: admins[i]}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'Admin not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error showing admin'}];
// 		}


// 		// Function for store admins API
// 		function storeRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

//             // If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Assisgn admin id - override if inserted
//                 data.id = admins.length;

//                 // Insert the new admin
//                 admins.push(data);

//                 // Return the success header
//                 return [header, {data: 'Admin stored'}];
//             }

// 			// Return the error header
// 			return [header, {error:'Error storing the admin'}];
// 		}


// 		// Function for update admins API
// 		function updateRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get admin by id from admin's array
//                 for(var i = 0; i <= admins.length - 1; i++) {

//                     // If admin exists
//                     if(admins[i].id == id) {

//                         // Override the admin
//                         admins[i] = data;

//                         // Return the success header
//                         return [header, {data: 'Admin updated'}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'Admin not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error updating admin'}];
// 		}


// 		// Basic algorithm for random headers
// 		function randomHeader(){

// 			// Generate a random number from 1 to 10
// 			var random = Math.floor((Math.random() * 10) + 1);

// 			// Return 500 if random is 10
// 			if(random == 10) {

// 				return 500;
// 			}

// 			// Return 404 if random is 9
// 			if(random == 9) {

// 				return 404;
// 			}

// 			// Return 200
// 			return 200;
// 		}


// 		// Function that pass the array that will create the httpBackend
// 	    function getMocks() {

// 	    	// Object to pass for fake API
// 			return [{

// 				label: 'destroy',
// 			    method: 'DELETE',
// 			    url: /\/api\/admins\/(d*)/,
// 			    params: ['id'],
// 			    respond: destroyRespond

// 			},{

// 				label: 'index',
// 			    method: 'GET',
// 			    url: '/api/admins/',
// 			    respond: indexRespond

// 			},{

// 				label: 'show',
// 			    method: 'GET',
// 			    url: /\/api\/admins\/(d*)/,
// 			    params: ['id'],
// 			    respond: showRespond

// 			},{

// 				label: 'store',
// 			    method: 'POST',
// 			    url: '/api/admins/',
// 			    respond: storeRespond

// 			},{

// 				label: 'update',
// 			    method: 'PUT',
// 			    url: /\/api\/admins\/(d*)/,
// 			    params: ['id'],
// 			    respond: updateRespond
// 			}];
// 		}


// 		// Function for set the array
// 		function setAdmins() {

//             admins = [];
// 		}
// 	}

// })();

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

(function() {

    'use strict';

    // Pass the adminssValidator to the app
    angular
    .module('y')
        .run(adminssValidator);


    // Define the adminssValidator
    function adminssValidator(validatorHelper) {


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
        | Declaring all functions used in the adminssValidator
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
    function advertisementsFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for advertisement advertisement
        var advertisementBase = '/api/advertisements/';


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

            return $http.get(advertisementBase)
                        .then(function(data){ return data; });
        }


        // Display a specified advertisement.
        function show(id) {

            return $http.get(advertisementBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created advertisement in storage.
        function store(data) {

            return $http.post(advertisementBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified advertisement in storage.
        function update(id, data) {

            return $http.put(advertisementBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified advertisement from storage.
        function destroy(id) {

            return $http.delete(advertisementBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();

// (function() {

//   'use strict';

//     // Pass the advertisementsMock to the app
// 	angular
// 	    .module('y')
// 	    .run(advertisementsMock);


// 	// Define the advertisementsMock
//     function advertisementsMock(mockHelper) {


//         // Inject with ng-annotate
//         "ngInject";


//         // Object for advertisement's mock
//         var advertisements = {};


//         /*
//         |--------------------------------------------------------------------------
//         | Contrsucts function
//         |--------------------------------------------------------------------------
//         |
//         | All functions that should be init when the controller start
//         |
//         */


//     	setadvertisements();															            // Set the list of advertisement
//     	mockHelper.configureMocks(getMocks()); 									        // Intercept all the api and add them to the httpBackend



// 	    /*
// 	    |--------------------------------------------------------------------------
// 	    | Functions
// 	    |--------------------------------------------------------------------------
// 	    |
// 	    | Declaring all functions used in the advertisementsMock
// 	    |
// 	    */


// 		// Function for destroy advertisements API
// 		function destroyRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Delete advertisement by id from advertisement's array
//                 for(var i = 0; i <= advertisements.length - 1; i++) {

//                     // If advertisement exists
//                     if(advertisements[i].id == id) {

//                         // Delete  advertisement
//                         advertisements.splice(i, 1);

//                         // Return the success header
//                         return [header, {data: 'advertisement removed'}];
//                     }
//                 }

// 				// Return the error header
//                 return [header, {error: 'advertisement not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error in advertisement removing'}];
// 		}


// 		// Function for index advertisements API
// 		function indexRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

// 				// Return the success header
//                 return [header, {data: advertisements}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error while listing advertisements'}];
// 		}


// 		// Function for show advertisements API
// 		function showRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get advertisement by id from advertisement's array
//                 for(var i = 0; i <= advertisements.length - 1; i++) {

//                     // If advertisement exists
//                     if(advertisements[i].id == id) {

//                         // Return the success header
//                         return [header, {data: advertisements[i]}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'advertisement not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error showing advertisement'}];
// 		}


// 		// Function for store advertisements API
// 		function storeRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

//             // If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Assisgn advertisement id - override if inserted
//                 data.id = advertisements.length;

//                 // Insert the new advertisement
//                 advertisements.push(data);

//                 // Return the success header
//                 return [header, {data: 'advertisement stored'}];
//             }

// 			// Return the error header
// 			return [header, {error:'Error storing the advertisement'}];
// 		}


// 		// Function for update advertisements API
// 		function updateRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get advertisement by id from advertisement's array
//                 for(var i = 0; i <= advertisements.length - 1; i++) {

//                     // If advertisement exists
//                     if(advertisements[i].id == id) {

//                         // Override the advertisement
//                         advertisements[i] = data;

//                         // Return the success header
//                         return [header, {data: 'advertisement updated'}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'advertisement not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error updating advertisement'}];
// 		}


// 		// Basic algorithm for random headers
// 		function randomHeader(){

// 			// Generate a random number from 1 to 10
// 			var random = Math.floor((Math.random() * 10) + 1);

// 			// Return 500 if random is 10
// 			if(random == 10) {

// 				return 500;
// 			}

// 			// Return 404 if random is 9
// 			if(random == 9) {

// 				return 404;
// 			}

// 			// Return 200
// 			return 200;
// 		}


// 		// Function that pass the array that will create the httpBackend
// 	    function getMocks() {

// 	    	// Object to pass for fake API
// 			return [{

// 				label: 'destroy',
// 			    method: 'DELETE',
// 			    url: /\/api\/advertisements\/(d*)/,
// 			    params: ['id'],
// 			    respond: destroyRespond

// 			},{

// 				label: 'index',
// 			    method: 'GET',
// 			    url: '/api/advertisements/',
// 			    respond: indexRespond

// 			},{

// 				label: 'show',
// 			    method: 'GET',
// 			    url: /\/api\/advertisements\/(d*)/,
// 			    params: ['id'],
// 			    respond: showRespond

// 			},{

// 				label: 'store',
// 			    method: 'POST',
// 			    url: '/api/advertisements/',
// 			    respond: storeRespond

// 			},{

// 				label: 'update',
// 			    method: 'PUT',
// 			    url: /\/api\/advertisements\/(d*)/,
// 			    params: ['id'],
// 			    respond: updateRespond
// 			}];
// 		}


// 		// Function for set the array
// 		function setadvertisements() {

//             advertisements = [];
// 		}
// 	}

// })();

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

    // Pass the articlesFactory to the app
    angular
        .module('y')
        .factory('articlesFactory', articlesFactory);


    // Define the articlesFactory
    function articlesFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for article article
        var articleBase = '/api/articles/';


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

            return $http.get(articleBase)
                        .then(function(data){ return data; });
        }


        // Display a specified article.
        function show(id) {

            return $http.get(articleBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created article in storage.
        function store(data) {

            return $http.post(articleBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified article in storage.
        function update(id, data) {

            return $http.put(articleBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified article from storage.
        function destroy(id) {

            return $http.delete(articleBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();

// (function() {

//   'use strict';

//     // Pass the articlesMock to the app
// 	angular
// 	    .module('y')
// 	    .run(articlesMock);


// 	// Define the articlesMock
//     function articlesMock(mockHelper) {


//         // Inject with ng-annotate
//         "ngInject";


//         // Object for article's mock
//         var articles = {};


//         /*
//         |--------------------------------------------------------------------------
//         | Contrsucts function
//         |--------------------------------------------------------------------------
//         |
//         | All functions that should be init when the controller start
//         |
//         */


//     	setarticles();															            // Set the list of article
//     	mockHelper.configureMocks(getMocks()); 									        // Intercept all the api and add them to the httpBackend



// 	    /*
// 	    |--------------------------------------------------------------------------
// 	    | Functions
// 	    |--------------------------------------------------------------------------
// 	    |
// 	    | Declaring all functions used in the articlesMock
// 	    |
// 	    */


// 		// Function for destroy articles API
// 		function destroyRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Delete article by id from article's array
//                 for(var i = 0; i <= articles.length - 1; i++) {

//                     // If article exists
//                     if(articles[i].id == id) {

//                         // Delete  article
//                         articles.splice(i, 1);

//                         // Return the success header
//                         return [header, {data: 'article removed'}];
//                     }
//                 }

// 				// Return the error header
//                 return [header, {error: 'article not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error in article removing'}];
// 		}


// 		// Function for index articles API
// 		function indexRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

// 				// Return the success header
//                 return [header, {data: articles}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error while listing articles'}];
// 		}


// 		// Function for show articles API
// 		function showRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get article by id from article's array
//                 for(var i = 0; i <= articles.length - 1; i++) {

//                     // If article exists
//                     if(articles[i].id == id) {

//                         // Return the success header
//                         return [header, {data: articles[i]}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'article not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error showing article'}];
// 		}


// 		// Function for store articles API
// 		function storeRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

//             // If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Assisgn article id - override if inserted
//                 data.id = articles.length;

//                 // Insert the new article
//                 articles.push(data);

//                 // Return the success header
//                 return [header, {data: 'article stored'}];
//             }

// 			// Return the error header
// 			return [header, {error:'Error storing the article'}];
// 		}


// 		// Function for update articles API
// 		function updateRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get article by id from article's array
//                 for(var i = 0; i <= articles.length - 1; i++) {

//                     // If article exists
//                     if(articles[i].id == id) {

//                         // Override the article
//                         articles[i] = data;

//                         // Return the success header
//                         return [header, {data: 'article updated'}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'article not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error updating article'}];
// 		}


// 		// Basic algorithm for random headers
// 		function randomHeader(){

// 			// Generate a random number from 1 to 10
// 			var random = Math.floor((Math.random() * 10) + 1);

// 			// Return 500 if random is 10
// 			if(random == 10) {

// 				return 500;
// 			}

// 			// Return 404 if random is 9
// 			if(random == 9) {

// 				return 404;
// 			}

// 			// Return 200
// 			return 200;
// 		}


// 		// Function that pass the array that will create the httpBackend
// 	    function getMocks() {

// 	    	// Object to pass for fake API
// 			return [{

// 				label: 'destroy',
// 			    method: 'DELETE',
// 			    url: /\/api\/articles\/(d*)/,
// 			    params: ['id'],
// 			    respond: destroyRespond

// 			},{

// 				label: 'index',
// 			    method: 'GET',
// 			    url: '/api/articles/',
// 			    respond: indexRespond

// 			},{

// 				label: 'show',
// 			    method: 'GET',
// 			    url: /\/api\/articles\/(d*)/,
// 			    params: ['id'],
// 			    respond: showRespond

// 			},{

// 				label: 'store',
// 			    method: 'POST',
// 			    url: '/api/articles/',
// 			    respond: storeRespond

// 			},{

// 				label: 'update',
// 			    method: 'PUT',
// 			    url: /\/api\/articles\/(d*)/,
// 			    params: ['id'],
// 			    respond: updateRespond
// 			}];
// 		}


// 		// Function for set the array
// 		function setarticles() {

//             articles = [];
// 		}
// 	}

// })();

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
    function billsFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for bill bill
        var billBase = '/api/bills/';


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

            return $http.get(billBase)
                        .then(function(data){ return data; });
        }


        // Display a specified bill.
        function show(id) {

            return $http.get(billBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created bill in storage.
        function store(data) {

            return $http.post(billBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified bill in storage.
        function update(id, data) {

            return $http.put(billBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified bill from storage.
        function destroy(id) {

            return $http.delete(billBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();

// (function() {

//   'use strict';

//     // Pass the billsMock to the app
// 	angular
// 	    .module('y')
// 	    .run(billsMock);


// 	// Define the billsMock
//     function billsMock(mockHelper) {


//         // Inject with ng-annotate
//         "ngInject";


//         // Object for bill's mock
//         var bills = {};


//         /*
//         |--------------------------------------------------------------------------
//         | Contrsucts function
//         |--------------------------------------------------------------------------
//         |
//         | All functions that should be init when the controller start
//         |
//         */


//     	setbills();															            // Set the list of bill
//     	mockHelper.configureMocks(getMocks()); 									        // Intercept all the api and add them to the httpBackend



// 	    /*
// 	    |--------------------------------------------------------------------------
// 	    | Functions
// 	    |--------------------------------------------------------------------------
// 	    |
// 	    | Declaring all functions used in the billsMock
// 	    |
// 	    */


// 		// Function for destroy bills API
// 		function destroyRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Delete bill by id from bill's array
//                 for(var i = 0; i <= bills.length - 1; i++) {

//                     // If bill exists
//                     if(bills[i].id == id) {

//                         // Delete  bill
//                         bills.splice(i, 1);

//                         // Return the success header
//                         return [header, {data: 'bill removed'}];
//                     }
//                 }

// 				// Return the error header
//                 return [header, {error: 'bill not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error in bill removing'}];
// 		}


// 		// Function for index bills API
// 		function indexRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

// 				// Return the success header
//                 return [header, {data: bills}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error while listing bills'}];
// 		}


// 		// Function for show bills API
// 		function showRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get bill by id from bill's array
//                 for(var i = 0; i <= bills.length - 1; i++) {

//                     // If bill exists
//                     if(bills[i].id == id) {

//                         // Return the success header
//                         return [header, {data: bills[i]}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'bill not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error showing bill'}];
// 		}


// 		// Function for store bills API
// 		function storeRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

//             // If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Assisgn bill id - override if inserted
//                 data.id = bills.length;

//                 // Insert the new bill
//                 bills.push(data);

//                 // Return the success header
//                 return [header, {data: 'bill stored'}];
//             }

// 			// Return the error header
// 			return [header, {error:'Error storing the bill'}];
// 		}


// 		// Function for update bills API
// 		function updateRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get bill by id from bill's array
//                 for(var i = 0; i <= bills.length - 1; i++) {

//                     // If bill exists
//                     if(bills[i].id == id) {

//                         // Override the bill
//                         bills[i] = data;

//                         // Return the success header
//                         return [header, {data: 'bill updated'}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'bill not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error updating bill'}];
// 		}


// 		// Basic algorithm for random headers
// 		function randomHeader(){

// 			// Generate a random number from 1 to 10
// 			var random = Math.floor((Math.random() * 10) + 1);

// 			// Return 500 if random is 10
// 			if(random == 10) {

// 				return 500;
// 			}

// 			// Return 404 if random is 9
// 			if(random == 9) {

// 				return 404;
// 			}

// 			// Return 200
// 			return 200;
// 		}


// 		// Function that pass the array that will create the httpBackend
// 	    function getMocks() {

// 	    	// Object to pass for fake API
// 			return [{

// 				label: 'destroy',
// 			    method: 'DELETE',
// 			    url: /\/api\/bills\/(d*)/,
// 			    params: ['id'],
// 			    respond: destroyRespond

// 			},{

// 				label: 'index',
// 			    method: 'GET',
// 			    url: '/api/bills/',
// 			    respond: indexRespond

// 			},{

// 				label: 'show',
// 			    method: 'GET',
// 			    url: /\/api\/bills\/(d*)/,
// 			    params: ['id'],
// 			    respond: showRespond

// 			},{

// 				label: 'store',
// 			    method: 'POST',
// 			    url: '/api/bills/',
// 			    respond: storeRespond

// 			},{

// 				label: 'update',
// 			    method: 'PUT',
// 			    url: /\/api\/bills\/(d*)/,
// 			    params: ['id'],
// 			    respond: updateRespond
// 			}];
// 		}


// 		// Function for set the array
// 		function setbills() {

//             bills = [];
// 		}
// 	}

// })();

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

    // Pass the documentsFactory to the app
    angular
        .module('y')
        .factory('documentsFactory', documentsFactory);


    // Define the documentsFactory
    function documentsFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for document document
        var documentBase = '/api/documents/';


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

            return $http.get(documentBase)
                        .then(function(data){ return data; });
        }


        // Display a specified document.
        function show(id) {

            return $http.get(documentBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created document in storage.
        function store(data) {

            return $http.post(documentBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified document in storage.
        function update(id, data) {

            return $http.put(documentBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified document from storage.
        function destroy(id) {

            return $http.delete(documentBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();

// (function() {

//   'use strict';

//     // Pass the documentsMock to the app
// 	angular
// 	    .module('y')
// 	    .run(documentsMock);


// 	// Define the documentsMock
//     function documentsMock(mockHelper) {


//         // Inject with ng-annotate
//         "ngInject";


//         // Object for document's mock
//         var documents = {};


//         /*
//         |--------------------------------------------------------------------------
//         | Contrsucts function
//         |--------------------------------------------------------------------------
//         |
//         | All functions that should be init when the controller start
//         |
//         */


//     	setdocuments();															            // Set the list of document
//     	mockHelper.configureMocks(getMocks()); 									        // Intercept all the api and add them to the httpBackend



// 	    /*
// 	    |--------------------------------------------------------------------------
// 	    | Functions
// 	    |--------------------------------------------------------------------------
// 	    |
// 	    | Declaring all functions used in the documentsMock
// 	    |
// 	    */


// 		// Function for destroy documents API
// 		function destroyRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Delete document by id from document's array
//                 for(var i = 0; i <= documents.length - 1; i++) {

//                     // If document exists
//                     if(documents[i].id == id) {

//                         // Delete  document
//                         documents.splice(i, 1);

//                         // Return the success header
//                         return [header, {data: 'document removed'}];
//                     }
//                 }

// 				// Return the error header
//                 return [header, {error: 'document not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error in document removing'}];
// 		}


// 		// Function for index documents API
// 		function indexRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

// 				// Return the success header
//                 return [header, {data: documents}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error while listing documents'}];
// 		}


// 		// Function for show documents API
// 		function showRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get document by id from document's array
//                 for(var i = 0; i <= documents.length - 1; i++) {

//                     // If document exists
//                     if(documents[i].id == id) {

//                         // Return the success header
//                         return [header, {data: documents[i]}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'document not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error showing document'}];
// 		}


// 		// Function for store documents API
// 		function storeRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

//             // If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Assisgn document id - override if inserted
//                 data.id = documents.length;

//                 // Insert the new document
//                 documents.push(data);

//                 // Return the success header
//                 return [header, {data: 'document stored'}];
//             }

// 			// Return the error header
// 			return [header, {error:'Error storing the document'}];
// 		}


// 		// Function for update documents API
// 		function updateRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get document by id from document's array
//                 for(var i = 0; i <= documents.length - 1; i++) {

//                     // If document exists
//                     if(documents[i].id == id) {

//                         // Override the document
//                         documents[i] = data;

//                         // Return the success header
//                         return [header, {data: 'document updated'}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'document not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error updating document'}];
// 		}


// 		// Basic algorithm for random headers
// 		function randomHeader(){

// 			// Generate a random number from 1 to 10
// 			var random = Math.floor((Math.random() * 10) + 1);

// 			// Return 500 if random is 10
// 			if(random == 10) {

// 				return 500;
// 			}

// 			// Return 404 if random is 9
// 			if(random == 9) {

// 				return 404;
// 			}

// 			// Return 200
// 			return 200;
// 		}


// 		// Function that pass the array that will create the httpBackend
// 	    function getMocks() {

// 	    	// Object to pass for fake API
// 			return [{

// 				label: 'destroy',
// 			    method: 'DELETE',
// 			    url: /\/api\/documents\/(d*)/,
// 			    params: ['id'],
// 			    respond: destroyRespond

// 			},{

// 				label: 'index',
// 			    method: 'GET',
// 			    url: '/api/documents/',
// 			    respond: indexRespond

// 			},{

// 				label: 'show',
// 			    method: 'GET',
// 			    url: /\/api\/documents\/(d*)/,
// 			    params: ['id'],
// 			    respond: showRespond

// 			},{

// 				label: 'store',
// 			    method: 'POST',
// 			    url: '/api/documents/',
// 			    respond: storeRespond

// 			},{

// 				label: 'update',
// 			    method: 'PUT',
// 			    url: /\/api\/documents\/(d*)/,
// 			    params: ['id'],
// 			    respond: updateRespond
// 			}];
// 		}


// 		// Function for set the array
// 		function setdocuments() {

//             documents = [];
// 		}
// 	}

// })();

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

    // Pass the staticsFactory to the app
    angular
        .module('y')
        .factory('staticsFactory', staticsFactory);


    // Define the staticsFactory
    function staticsFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for static static
        var staticBase = '/api/statics/';


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

            return $http.get(staticBase)
                        .then(function(data){ return data; });
        }


        // Display a specified static.
        function show(id) {

            return $http.get(staticBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created static in storage.
        function store(data) {

            return $http.post(staticBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified static in storage.
        function update(id, data) {

            return $http.put(staticBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified static from storage.
        function destroy(id) {

            return $http.delete(staticBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();

// (function() {

//   'use strict';

//     // Pass the staticsMock to the app
// 	angular
// 	    .module('y')
// 	    .run(staticsMock);


// 	// Define the staticsMock
//     function staticsMock(mockHelper) {


//         // Inject with ng-annotate
//         "ngInject";


//         // Object for static's mock
//         var statics = {};


//         /*
//         |--------------------------------------------------------------------------
//         | Contrsucts function
//         |--------------------------------------------------------------------------
//         |
//         | All functions that should be init when the controller start
//         |
//         */


//     	setstatics();															            // Set the list of static
//     	mockHelper.configureMocks(getMocks()); 									        // Intercept all the api and add them to the httpBackend



// 	    /*
// 	    |--------------------------------------------------------------------------
// 	    | Functions
// 	    |--------------------------------------------------------------------------
// 	    |
// 	    | Declaring all functions used in the staticsMock
// 	    |
// 	    */


// 		// Function for destroy statics API
// 		function destroyRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Delete static by id from static's array
//                 for(var i = 0; i <= statics.length - 1; i++) {

//                     // If static exists
//                     if(statics[i].id == id) {

//                         // Delete  static
//                         statics.splice(i, 1);

//                         // Return the success header
//                         return [header, {data: 'static removed'}];
//                     }
//                 }

// 				// Return the error header
//                 return [header, {error: 'static not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error in static removing'}];
// 		}


// 		// Function for index statics API
// 		function indexRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

// 				// Return the success header
//                 return [header, {data: statics}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error while listing statics'}];
// 		}


// 		// Function for show statics API
// 		function showRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get static by id from static's array
//                 for(var i = 0; i <= statics.length - 1; i++) {

//                     // If static exists
//                     if(statics[i].id == id) {

//                         // Return the success header
//                         return [header, {data: statics[i]}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'static not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error showing static'}];
// 		}


// 		// Function for store statics API
// 		function storeRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

//             // If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Assisgn static id - override if inserted
//                 data.id = statics.length;

//                 // Insert the new static
//                 statics.push(data);

//                 // Return the success header
//                 return [header, {data: 'static stored'}];
//             }

// 			// Return the error header
// 			return [header, {error:'Error storing the static'}];
// 		}


// 		// Function for update statics API
// 		function updateRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get static by id from static's array
//                 for(var i = 0; i <= statics.length - 1; i++) {

//                     // If static exists
//                     if(statics[i].id == id) {

//                         // Override the static
//                         statics[i] = data;

//                         // Return the success header
//                         return [header, {data: 'static updated'}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'static not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error updating static'}];
// 		}


// 		// Basic algorithm for random headers
// 		function randomHeader(){

// 			// Generate a random number from 1 to 10
// 			var random = Math.floor((Math.random() * 10) + 1);

// 			// Return 500 if random is 10
// 			if(random == 10) {

// 				return 500;
// 			}

// 			// Return 404 if random is 9
// 			if(random == 9) {

// 				return 404;
// 			}

// 			// Return 200
// 			return 200;
// 		}


// 		// Function that pass the array that will create the httpBackend
// 	    function getMocks() {

// 	    	// Object to pass for fake API
// 			return [{

// 				label: 'destroy',
// 			    method: 'DELETE',
// 			    url: /\/api\/statics\/(d*)/,
// 			    params: ['id'],
// 			    respond: destroyRespond

// 			},{

// 				label: 'index',
// 			    method: 'GET',
// 			    url: '/api/statics/',
// 			    respond: indexRespond

// 			},{

// 				label: 'show',
// 			    method: 'GET',
// 			    url: /\/api\/statics\/(d*)/,
// 			    params: ['id'],
// 			    respond: showRespond

// 			},{

// 				label: 'store',
// 			    method: 'POST',
// 			    url: '/api/statics/',
// 			    respond: storeRespond

// 			},{

// 				label: 'update',
// 			    method: 'PUT',
// 			    url: /\/api\/statics\/(d*)/,
// 			    params: ['id'],
// 			    respond: updateRespond
// 			}];
// 		}


// 		// Function for set the array
// 		function setstatics() {

//             statics = [];
// 		}
// 	}

// })();

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

		    state: 'statics-home',
		    config: {
		        url: '/',
		        templateUrl: 'app/modules/statics/home/statics.home.html',
		        controller: 'staticsHomeCtrl',
		        controllerAs: 'staticsHome'
		    }
		}];
	}

})();

(function() {

  'use strict';

    // Pass the ticketsFactory to the app
    angular
        .module('y')
        .factory('ticketsFactory', ticketsFactory);


    // Define the ticketsFactory
    function ticketsFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for ticket ticket
        var ticketBase = '/api/tickets/';


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

            return $http.get(ticketBase)
                        .then(function(data){ return data; });
        }


        // Display a specified ticket.
        function show(id) {

            return $http.get(ticketBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created ticket in storage.
        function store(data) {

            return $http.post(ticketBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified ticket in storage.
        function update(id, data) {

            return $http.put(ticketBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified ticket from storage.
        function destroy(id) {

            return $http.delete(ticketBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();

// (function() {

//   'use strict';

//     // Pass the ticketsMock to the app
// 	angular
// 	    .module('y')
// 	    .run(ticketsMock);


// 	// Define the ticketsMock
//     function ticketsMock(mockHelper) {


//         // Inject with ng-annotate
//         "ngInject";


//         // Object for ticket's mock
//         var tickets = {};


//         /*
//         |--------------------------------------------------------------------------
//         | Contrsucts function
//         |--------------------------------------------------------------------------
//         |
//         | All functions that should be init when the controller start
//         |
//         */


//     	settickets();															            // Set the list of ticket
//     	mockHelper.configureMocks(getMocks()); 									        // Intercept all the api and add them to the httpBackend



// 	    /*
// 	    |--------------------------------------------------------------------------
// 	    | Functions
// 	    |--------------------------------------------------------------------------
// 	    |
// 	    | Declaring all functions used in the ticketsMock
// 	    |
// 	    */


// 		// Function for destroy tickets API
// 		function destroyRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Delete ticket by id from ticket's array
//                 for(var i = 0; i <= tickets.length - 1; i++) {

//                     // If ticket exists
//                     if(tickets[i].id == id) {

//                         // Delete  ticket
//                         tickets.splice(i, 1);

//                         // Return the success header
//                         return [header, {data: 'ticket removed'}];
//                     }
//                 }

// 				// Return the error header
//                 return [header, {error: 'ticket not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error in ticket removing'}];
// 		}


// 		// Function for index tickets API
// 		function indexRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

// 				// Return the success header
//                 return [header, {data: tickets}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error while listing tickets'}];
// 		}


// 		// Function for show tickets API
// 		function showRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get ticket by id from ticket's array
//                 for(var i = 0; i <= tickets.length - 1; i++) {

//                     // If ticket exists
//                     if(tickets[i].id == id) {

//                         // Return the success header
//                         return [header, {data: tickets[i]}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'ticket not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error showing ticket'}];
// 		}


// 		// Function for store tickets API
// 		function storeRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

//             // If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Assisgn ticket id - override if inserted
//                 data.id = tickets.length;

//                 // Insert the new ticket
//                 tickets.push(data);

//                 // Return the success header
//                 return [header, {data: 'ticket stored'}];
//             }

// 			// Return the error header
// 			return [header, {error:'Error storing the ticket'}];
// 		}


// 		// Function for update tickets API
// 		function updateRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get ticket by id from ticket's array
//                 for(var i = 0; i <= tickets.length - 1; i++) {

//                     // If ticket exists
//                     if(tickets[i].id == id) {

//                         // Override the ticket
//                         tickets[i] = data;

//                         // Return the success header
//                         return [header, {data: 'ticket updated'}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'ticket not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error updating ticket'}];
// 		}


// 		// Basic algorithm for random headers
// 		function randomHeader(){

// 			// Generate a random number from 1 to 10
// 			var random = Math.floor((Math.random() * 10) + 1);

// 			// Return 500 if random is 10
// 			if(random == 10) {

// 				return 500;
// 			}

// 			// Return 404 if random is 9
// 			if(random == 9) {

// 				return 404;
// 			}

// 			// Return 200
// 			return 200;
// 		}


// 		// Function that pass the array that will create the httpBackend
// 	    function getMocks() {

// 	    	// Object to pass for fake API
// 			return [{

// 				label: 'destroy',
// 			    method: 'DELETE',
// 			    url: /\/api\/tickets\/(d*)/,
// 			    params: ['id'],
// 			    respond: destroyRespond

// 			},{

// 				label: 'index',
// 			    method: 'GET',
// 			    url: '/api/tickets/',
// 			    respond: indexRespond

// 			},{

// 				label: 'show',
// 			    method: 'GET',
// 			    url: /\/api\/tickets\/(d*)/,
// 			    params: ['id'],
// 			    respond: showRespond

// 			},{

// 				label: 'store',
// 			    method: 'POST',
// 			    url: '/api/tickets/',
// 			    respond: storeRespond

// 			},{

// 				label: 'update',
// 			    method: 'PUT',
// 			    url: /\/api\/tickets\/(d*)/,
// 			    params: ['id'],
// 			    respond: updateRespond
// 			}];
// 		}


// 		// Function for set the array
// 		function settickets() {

//             tickets = [];
// 		}
// 	}

// })();

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
    function usersFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for user user
        var userBase = '/api/users/';


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

            return $http.get(userBase)
                        .then(function(data){ return data; });
        }


        // Display a specified user.
        function show(id) {

            return $http.get(userBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created user in storage.
        function store(data) {

            return $http.post(userBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified user in storage.
        function update(id, data) {

            return $http.put(userBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified user from storage.
        function destroy(id) {

            return $http.delete(userBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();

// (function() {

//   'use strict';

//     // Pass the usersMock to the app
// 	angular
// 	    .module('y')
// 	    .run(usersMock);


// 	// Define the usersMock
//     function usersMock(mockHelper) {


//         // Inject with ng-annotate
//         "ngInject";


//         // Object for user's mock
//         var users = {};


//         /*
//         |--------------------------------------------------------------------------
//         | Contrsucts function
//         |--------------------------------------------------------------------------
//         |
//         | All functions that should be init when the controller start
//         |
//         */


//     	setUsers();															            // Set the list of user
//     	mockHelper.configureMocks(getMocks()); 									        // Intercept all the api and add them to the httpBackend



// 	    /*
// 	    |--------------------------------------------------------------------------
// 	    | Functions
// 	    |--------------------------------------------------------------------------
// 	    |
// 	    | Declaring all functions used in the usersMock
// 	    |
// 	    */


// 		// Function for destroy users API
// 		function destroyRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Delete user by id from user's array
//                 for(var i = 0; i <= users.length - 1; i++) {

//                     // If user exists
//                     if(users[i].id == id) {

//                         // Delete  user
//                         users.splice(i, 1);

//                         // Return the success header
//                         return [header, {data: 'User removed'}];
//                     }
//                 }

// 				// Return the error header
//                 return [header, {error: 'User not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error in user removing'}];
// 		}


// 		// Function for index users API
// 		function indexRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

// 				// Return the success header
//                 return [header, {data: users}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error while listing users'}];
// 		}


// 		// Function for show users API
// 		function showRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get user by id from user's array
//                 for(var i = 0; i <= users.length - 1; i++) {

//                     // If user exists
//                     if(users[i].id == id) {

//                         // Return the success header
//                         return [header, {data: users[i]}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'User not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error showing user'}];
// 		}


// 		// Function for store users API
// 		function storeRespond(method, url, data, headers, params) {

// 			// Get a random header
// 			var header = randomHeader();

//             // If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Assisgn user id - override if inserted
//                 data.id = users.length;

//                 // Insert the new user
//                 users.push(data);

//                 // Return the success header
//                 return [header, {data: 'User stored'}];
//             }

// 			// Return the error header
// 			return [header, {error:'Error storing the user'}];
// 		}


// 		// Function for update users API
// 		function updateRespond(method, url, data, headers, params) {

//             // Get the id param from url
//             var id = url.split("/").pop();

// 			// Get a random header
// 			var header = randomHeader();

// 			// If the result will be 200, execute the operation
// 			if(header == 200) {

//                 // Get user by id from user's array
//                 for(var i = 0; i <= users.length - 1; i++) {

//                     // If user exists
//                     if(users[i].id == id) {

//                         // Override the user
//                         users[i] = data;

//                         // Return the success header
//                         return [header, {data: 'User updated'}];
//                     }
//                 }

//                 // Return the error header
//     			return [header, {error:'User not found'}];
// 			}

// 			// Return the error header
// 			return [header, {error:'Error updating user'}];
// 		}


// 		// Basic algorithm for random headers
// 		function randomHeader(){

// 			// Generate a random number from 1 to 10
// 			var random = Math.floor((Math.random() * 10) + 1);

// 			// Return 500 if random is 10
// 			if(random == 10) {

// 				return 500;
// 			}

// 			// Return 404 if random is 9
// 			if(random == 9) {

// 				return 404;
// 			}

// 			// Return 200
// 			return 200;
// 		}


// 		// Function that pass the array that will create the httpBackend
// 	    function getMocks() {

// 	    	// Object to pass for fake API
// 			return [{

// 				label: 'destroy',
// 			    method: 'DELETE',
// 			    url: /\/api\/users\/(d*)/,
// 			    params: ['id'],
// 			    respond: destroyRespond

// 			},{

// 				label: 'index',
// 			    method: 'GET',
// 			    url: '/api/users/',
// 			    respond: indexRespond

// 			},{

// 				label: 'show',
// 			    method: 'GET',
// 			    url: /\/api\/users\/(d*)/,
// 			    params: ['id'],
// 			    respond: showRespond

// 			},{

// 				label: 'store',
// 			    method: 'POST',
// 			    url: '/api/users/',
// 			    respond: storeRespond

// 			},{

// 				label: 'update',
// 			    method: 'PUT',
// 			    url: /\/api\/users\/(d*)/,
// 			    params: ['id'],
// 			    respond: updateRespond
// 			}];
// 		}


// 		// Function for set the array
// 		function setUsers() {

//             users = [{

//                 "id": 1,
//                 "name": "Mario",
//                 "surname": "Rossi"
//             },
//             {
//                 "id": 2,
//                 "name": "Luigi",
//                 "surname": "Verdi"
//             },
//             {
//                 "id": 3,
//                 "name": "Furio",
//                 "surname": "Bianchi"
//             }];
// 		}
// 	}

// })();

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

    // Pass the usersValidator to the app
    angular
        .module('y')
        .run(usersValidator);


    // Define the usersValidator
    function usersValidator(validatorHelper) {


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
        | Declaring all functions used in the usersValidator
        |
        */



        // Function that pass the array that will create the model validator
        function getValidators() {

            // Object to pass with validation rules
            return {
                'User': {
                    'lastName': {
                        'size': {
                            'min': 2,
                            'max': 10,
                            'message': 'Last name must be between 2 and 10 characters.'
                        },
                        'required': {
                            'message': 'Last name is required.'
                        }
                    },
                    'firstName': {
                        'size': {
                            'min': 2,
                            'max': 20,
                            'message': 'First name must be between 2 and 20 characters.'
                        }
                    }
                }
            };

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
    function userService($resource) {


        // Inject with ng-annotate
        "ngInject";

        // Define the user factory object to return
        var userService = {
            $user: {
                id: null,
                username: null,
                access_token: null,
            },
            isGuest: true,
            init: init,
            login: login,
            getId: getId,
            getToken: getToken,
            getName: getName
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
                    if(response.status == 200)
                    {
                        userService.$user = response.data;
                        userService.isGuest = false;
                        success = true;
                    }

                    cb(null, success);
                })
                .catch(function(err){
                    cb(err, false);
                });
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
    function accountsIndexCtrl(accountsFactory) {


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

    // Pass the accountsShowCtrl to the app
    angular
        .module('y')
        .controller('accountsShowCtrl', accountsShowCtrl);


    // Define the accountsShowCtrl
    function accountsShowCtrl(accountsFactory, $stateParams) {


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

(function() {

  'use strict';

    // Pass the accountsStoreCtrl to the app
    angular
        .module('y')
        .controller('accountsStoreCtrl', accountsStoreCtrl);


    // Define the accountsStoreCtrl
    function accountsStoreCtrl(accountsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define accountsStore as this for ControllerAs and auto-$scope
        var accountsStore = this;


        // Define the accountsStore functions and objects that will be passed to the view
        accountsStore.store = store;                                           // Store a resource


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

    // Pass the adminsDestroyCtrl to the app
    angular
        .module('y')
        .controller('adminsDestroyCtrl', adminsDestroyCtrl);


    // Define the adminsDestroyCtrl
    function adminsDestroyCtrl(adminsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define adminsDestroy as this for ControllerAs and auto-$scope
        var adminsDestroy = this;


        // Define the adminsDestroy functions and objects that will be passed to the view
        adminsDestroy.admin = {};                                                 // Object for show the admin
        adminsDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the adminsDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('adminsDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return adminsFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the admin
        function show(id) {

            return adminsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                adminsDestroy.admin = data;
                return adminsDestroy.admin;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the adminsIndexCtrl to the app
    angular
        .module('y')
        .controller('adminsIndexCtrl', adminsIndexCtrl);


    // Define the adminsIndexCtrl
    function adminsIndexCtrl(adminsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define adminsIndex as this for ControllerAs and auto-$scope
        var adminsIndex = this;


        // Define the adminsIndex functions and objects that will be passed to the view
        adminsIndex.admins = [];                                              // Array for list of admins


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
        | Declaring all functions used in the adminsIndexCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('adminsIndexCtrl init');
        }


        // Get all admins.
        function index() {

            return adminsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            adminsIndex.admins = data.data;
	            return adminsIndex.admins;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the adminsShowCtrl to the app
    angular
        .module('y')
        .controller('adminsShowCtrl', adminsShowCtrl);


    // Define the adminsShowCtrl
    function adminsShowCtrl(adminsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define adminsShow as this for ControllerAs and auto-$scope
        var adminsShow = this;


        // Define the adminsShow functions and objects that will be passed to the view
        adminsShow.admin = {};                                                // Object for show the admin


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
        | Declaring all functions used in the adminsShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('adminsShowCtrl init');
        }


        // Get the admin
        function show(id) {

            return adminsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            adminsShow.admin = data;
	            return adminsShow.admin;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();

(function() {

  'use strict';

    // Pass the adminsStoreCtrl to the app
    angular
        .module('y')
        .controller('adminsStoreCtrl', adminsStoreCtrl);


    // Define the adminsStoreCtrl
    function adminsStoreCtrl(adminsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define adminsStore as this for ControllerAs and auto-$scope
        var adminsStore = this;


        // Define the adminsStore functions and objects that will be passed to the view
        adminsStore.store = store;                                           // Store a resource


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
        | Declaring all functions used in the adminsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('adminsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return adminsFactory.store(data).then(function(data) {

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

    // Pass the adminsUpdateCtrl to the app
    angular
        .module('y')
        .controller('adminsUpdateCtrl', adminsUpdateCtrl);


    // Define the adminsUpdateCtrl
    function adminsUpdateCtrl(adminsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define adminsUpdate as this for ControllerAs and auto-$scope
        var adminsUpdate = this;


        // Define the adminsUpdate functions and objects that will be passed to the view
        adminsUpdate.admin = {};                                                  // Object for show the admin
        adminsUpdate.update = update;                                            // Update a resource


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
        | Declaring all functions used in the adminsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('adminsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return adminsFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the admin
        function show(id) {

            return adminsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                adminsUpdate.admin = data;
                return adminsUpdate.admin;

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

    // Pass the advertisementsIndexCtrl to the app
    angular
        .module('y')
        .controller('advertisementsIndexCtrl', advertisementsIndexCtrl);


    // Define the advertisementsIndexCtrl
    function advertisementsIndexCtrl(advertisementsFactory) {


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
    function articlesIndexCtrl(articlesFactory) {


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
    function billsIndexCtrl(billsFactory) {


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
        $restful.setDomain("http://localhost/tree/server");
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
       $mdThemingProvider.theme('default')
         .primaryPalette('light-blue',{
            'default':'400'
       })
         .accentPalette('green',{
            'default':'600' 
       })
         .warnPalette('red',{
            'default':'500'
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
    function documentsIndexCtrl(documentsFactory) {


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

    // Pass the staticsIndexCtrl to the app
    angular
        .module('y')
        .controller('staticsIndexCtrl', staticsIndexCtrl);


    // Define the staticsIndexCtrl
    function staticsIndexCtrl(staticsFactory) {


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

    // Pass the staticsHomeCtrl to the app
    angular
        .module('y')
        .controller('staticsHomeCtrl', staticsHomeCtrl);

    // Define the staticsHomeCtrl
    function staticsHomeCtrl() {

        // Inject with ng-annotate
        "ngInject";

        // Define staticsHome as this for ControllerAs and auto-$scope
        var staticsHome = this;
            staticsHome.title =    "Tree app";

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
    function ticketsIndexCtrl(ticketsFactory) {


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
    function usersIndexCtrl(usersFactory) {


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
    function footerDirectiveController() {

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
    function navbarDirectiveController(userService) {
        var self = this;
        self.title = "Tree";
        self.guest = userService.isGuest;

        self.login = function(){
            userService.login(self.form, function(err, success){
                if(err){
                    console.error(err);
                }

                self.guest = !success;
            });
        };
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
    function sidenavDirectiveController() {

        // Do stuff...
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
            template: '<div id="cy" style="height:100px; width:100px;"></div>',
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
