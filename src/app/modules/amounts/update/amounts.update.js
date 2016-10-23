(function() {

  'use strict';

    // Pass the amountsUpdateCtrl to the app
    angular
        .module('y')
        .controller('amountsUpdateCtrl', amountsUpdateCtrl);


    // Define the amountsUpdateCtrl
    function amountsUpdateCtrl(amountsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define amountsUpdate as this for ControllerAs and auto-$scope
        var amountsUpdate = this;


        // Define the amountsUpdate functions and objects that will be passed to the view
        amountsUpdate.amount = {};                                                  // Object for show the amount
        amountsUpdate.update = update;                                            // Update a resource


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
        | Declaring all functions used in the amountsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('amountsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return amountsFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the amount
        function show(id) {

            return amountsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                amountsUpdate.amount = data;
                return amountsUpdate.amount;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
