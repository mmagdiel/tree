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
