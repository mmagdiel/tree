(function() {

  'use strict';

    // Pass the billsUpdateCtrl to the app
    angular
        .module('y')
        .controller('billsUpdateCtrl', billsUpdateCtrl);


    // Define the billsUpdateCtrl
    function billsUpdateCtrl(billsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define billsUpdate as this for ControllerAs and auto-$scope
        var billsUpdate = this;


        // Define the billsUpdate functions and objects that will be passed to the view
        billsUpdate.bill = {};                                                  // Object for show the bill
        billsUpdate.update = update;                                            // Update a resource


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
        | Declaring all functions used in the billsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('billsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return billsFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the bill
        function show(id) {

            return billsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                billsUpdate.bill = data;
                return billsUpdate.bill;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
