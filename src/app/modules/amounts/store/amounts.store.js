(function() {

  'use strict';

    // Pass the amountsStoreCtrl to the app
    angular
        .module('y')
        .controller('amountsStoreCtrl', amountsStoreCtrl);


    // Define the amountsStoreCtrl
    function amountsStoreCtrl(amountsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define amountsStore as this for ControllerAs and auto-$scope
        var amountsStore = this;


        // Define the amountsStore functions and objects that will be passed to the view
        amountsStore.store = store;                                           // Store a resource


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
        | Declaring all functions used in the amountsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('amountsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return amountsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
