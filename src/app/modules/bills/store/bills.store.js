(function() {

  'use strict';

    // Pass the billsStoreCtrl to the app
    angular
        .module('y')
        .controller('billsStoreCtrl', billsStoreCtrl);


    // Define the billsStoreCtrl
    function billsStoreCtrl(billsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define billsStore as this for ControllerAs and auto-$scope
        var billsStore = this;


        // Define the billsStore functions and objects that will be passed to the view
        billsStore.store = store;                                           // Store a resource


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
        | Declaring all functions used in the billsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('billsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return billsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
