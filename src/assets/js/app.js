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
    function userService() {


        // Inject with ng-annotate
        "ngInject";


        // Define the user factory object to return
        var userService = {

            init: init

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
        $restful.setDomain("http://localhost/tree/server/");
      }]);

      app.controller("exampleController", ["$resource", function($resource){
      //  Domain is already defined, accounts will be appended with the domain url
      
      var resource = new $resource("accounts");

      // Fetch can accept optional parameter to where it will perform a request from accounts
        resource.fetch()
          .then(function(response){
            // successful respone
          })
          .catch(function(err){
            // Error on request
          });
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

    // Pass the accountsDirective to the app
    angular
        .module('y')
        .directive('accountsDirective', accountsDirective);


    // Define the accountsDirective
    function accountsDirective() {

        // Define directive
        var directive = {

                restrict: 'EA',
                templateUrl: 'app/shared/components/accounts-component/accounts-component.html',
                scope: {
                    accountsString: '@',                      // Isolated scope string
                    accountsAttribute: '=',                   // Isolated scope two-way data binding
                    accountsAction: '&'                       // Isolated scope action
                },
                link: linkFunc,
                controller: accountsDirectiveController,
                controllerAs: 'accountsDirective'
        };

        // Return directive
        return directive;

        // Define link function
        function linkFunc(scope, el, attr, ctrl) {

            // Do stuff...
        }
    }

    // Define directive controller
    function accountsDirectiveController() {

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
    function navbarDirectiveController() {

        // Do stuff...
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
                scope: {},
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
