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
