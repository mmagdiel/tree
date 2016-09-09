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
