(function() {

  'use strict';

    // Pass the accountsStoreCtrl to the app
    angular
        .module('y')
        .controller('accountsStoreCtrl', accountsStoreCtrl);


    // Define the accountsStoreCtrl
    function accountsStoreCtrl(accountsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define accountsStore as this for ControllerAs and auto-$scope
        var accountsStore = this;


        // Define the accountsStore functions and objects that will be passed to the view
        accountsStore.store = store;                                           // Store a resource


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
        | Declaring all functions used in the accountsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('accountsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return accountsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
