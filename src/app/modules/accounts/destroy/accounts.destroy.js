(function() {

  'use strict';

    // Pass the accountsDestroyCtrl to the app
    angular
        .module('y')
        .controller('accountsDestroyCtrl', accountsDestroyCtrl);


    // Define the accountsDestroyCtrl
    function accountsDestroyCtrl(accountsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define accountsDestroy as this for ControllerAs and auto-$scope
        var accountsDestroy = this;


        // Define the accountsDestroy functions and objects that will be passed to the view
        accountsDestroy.account = {};                                                 // Object for show the account
        accountsDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the accountsDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('accountsDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return accountsFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the account
        function show(id) {

            return accountsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                accountsDestroy.account = data;
                return accountsDestroy.account;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
