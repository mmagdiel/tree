(function() {

  'use strict';

    // Pass the treesStoreCtrl to the app
    angular
        .module('y')
        .controller('treesStoreCtrl', treesStoreCtrl);


    // Define the treesStoreCtrl
    function treesStoreCtrl(treesFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define treesStore as this for ControllerAs and auto-$scope
        var treesStore = this;


        // Define the treesStore functions and objects that will be passed to the view
        treesStore.store = store;                                           // Store a resource


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
        | Declaring all functions used in the treesStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('treesStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return treesFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
