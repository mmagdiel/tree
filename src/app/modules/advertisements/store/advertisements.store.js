(function() {

  'use strict';

    // Pass the advertisementsStoreCtrl to the app
    angular
        .module('y')
        .controller('advertisementsStoreCtrl', advertisementsStoreCtrl);


    // Define the advertisementsStoreCtrl
    function advertisementsStoreCtrl(advertisementsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define advertisementsStore as this for ControllerAs and auto-$scope
        var advertisementsStore = this;


        // Define the advertisementsStore functions and objects that will be passed to the view
        advertisementsStore.store = store;                                           // Store a resource


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
        | Declaring all functions used in the advertisementsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('advertisementsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return advertisementsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
