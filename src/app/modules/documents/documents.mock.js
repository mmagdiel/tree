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
