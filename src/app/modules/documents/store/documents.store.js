(function(){
  'use strict';

	// Pass the documentsStoreCtrl to the app
	angular
		.module('y')
		.controller('documentsStoreCtrl', documentsStoreCtrl);


	// Define the documentsStoreCtrl
	function documentsStoreCtrl(documentsFactory){
		// Inject with ng-annotate
		"ngInject";

		// Define documentsStore as this for ControllerAs and auto-$scope
		var documentsStore = this;

		documentsStore.form = {};

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
		function initLog(){
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
