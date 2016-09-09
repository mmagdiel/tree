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
