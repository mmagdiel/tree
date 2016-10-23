(function() {

  'use strict';

    // Pass the responsesStoreCtrl to the app
    angular
        .module('y')
        .controller('responsesStoreCtrl', responsesStoreCtrl);


    // Define the responsesStoreCtrl
    function responsesStoreCtrl(responsesFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define responsesStore as this for ControllerAs and auto-$scope
        var responsesStore = this;


        // Define the responsesStore functions and objects that will be passed to the view
        responsesStore.store = store;                                           // Store a resource


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
        | Declaring all functions used in the responsesStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('responsesStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return responsesFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
