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
