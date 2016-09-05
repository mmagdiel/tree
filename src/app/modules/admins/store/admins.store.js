(function() {

  'use strict';

    // Pass the adminsStoreCtrl to the app
    angular
        .module('y')
        .controller('adminsStoreCtrl', adminsStoreCtrl);


    // Define the adminsStoreCtrl
    function adminsStoreCtrl(adminsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define adminsStore as this for ControllerAs and auto-$scope
        var adminsStore = this;


        // Define the adminsStore functions and objects that will be passed to the view
        adminsStore.store = store;                                           // Store a resource


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
        | Declaring all functions used in the adminsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('adminsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return adminsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
