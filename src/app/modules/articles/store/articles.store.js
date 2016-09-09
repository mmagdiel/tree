(function() {

  'use strict';

    // Pass the articlesStoreCtrl to the app
    angular
        .module('y')
        .controller('articlesStoreCtrl', articlesStoreCtrl);


    // Define the articlesStoreCtrl
    function articlesStoreCtrl(articlesFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define articlesStore as this for ControllerAs and auto-$scope
        var articlesStore = this;


        // Define the articlesStore functions and objects that will be passed to the view
        articlesStore.store = store;                                           // Store a resource


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
        | Declaring all functions used in the articlesStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('articlesStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return articlesFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
