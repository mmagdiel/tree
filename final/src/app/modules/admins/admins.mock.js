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
