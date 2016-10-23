(function() {

  'use strict';

    // Pass the staticsStoreCtrl to the app
    angular
        .module('y')
        .controller('staticsStoreCtrl', staticsStoreCtrl);


    // Define the staticsStoreCtrl
    function staticsStoreCtrl(staticsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define staticsStore as this for ControllerAs and auto-$scope
        var staticsStore = this;


        // Define the staticsStore functions and objects that will be passed to the view
        staticsStore.store = store;                                           // Store a resource


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
        | Declaring all functions used in the staticsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('staticsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return staticsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
