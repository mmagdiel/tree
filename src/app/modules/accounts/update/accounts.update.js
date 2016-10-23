(function() {

  'use strict';

    // Pass the accountsUpdateCtrl to the app
    angular
        .module('y')
        .controller('accountsUpdateCtrl', accountsUpdateCtrl);


    // Define the accountsUpdateCtrl
    function accountsUpdateCtrl(accountsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define accountsUpdate as this for ControllerAs and auto-$scope
        var accountsUpdate = this;


        // Define the accountsUpdate functions and objects that will be passed to the view
        accountsUpdate.account = {};                                                  // Object for show the account
        accountsUpdate.update = update;                                            // Update a resource


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
        | Declaring all functions used in the accountsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('accountsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return accountsFactory.update(id, data).then(function(data) {

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
                accountsUpdate.account = data;
                return accountsUpdate.account;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
