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
