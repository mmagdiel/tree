(function() {

  'use strict';

    // Pass the accountsShowCtrl to the app
    angular
        .module('y')
        .controller('accountsShowCtrl', accountsShowCtrl);


    // Define the accountsShowCtrl
    function accountsShowCtrl(accountsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define accountsShow as this for ControllerAs and auto-$scope
        var accountsShow = this;


        // Define the accountsShow functions and objects that will be passed to the view
        accountsShow.account = {};                                                // Object for show the account


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the accountsShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('accountsShowCtrl init');
        }


        // Get the account
        function show(id) {

            return accountsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            accountsShow.account = data;
	            return accountsShow.account;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
