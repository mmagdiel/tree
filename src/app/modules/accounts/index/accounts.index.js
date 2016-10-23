(function() {

  'use strict';

    // Pass the accountsIndexCtrl to the app
    angular
        .module('y')
        .controller('accountsIndexCtrl', accountsIndexCtrl);


    // Define the accountsIndexCtrl
    function accountsIndexCtrl(accountsFactory, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define accountsIndex as this for ControllerAs and auto-$scope
        var accountsIndex = this;


        // Define the accountsIndex functions and objects that will be passed to the view
        accountsIndex.accounts = [];                                              // Array for list of accounts


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
        | Declaring all functions used in the accountsIndexCtrl
        |
        */

		accountsIndex.go = function(state,id){
			$state.go(state,{
				id: id
			});
		}

        // Sample for init function
        function initLog() {

            console.log('accountsIndexCtrl init');
        }


        // Get all accounts.
        function index() {

            return accountsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            accountsIndex.accounts = data.data;
	            return accountsIndex.accounts;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
