(function() {

  'use strict';

    // Pass the billsDestroyCtrl to the app
    angular
        .module('y')
        .controller('billsDestroyCtrl', billsDestroyCtrl);


    // Define the billsDestroyCtrl
    function billsDestroyCtrl(billsFactory, $stateParams, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define billsDestroy as this for ControllerAs and auto-$scope
        var billsDestroy = this;


        // Define the billsDestroy functions and objects that will be passed to the view
        billsDestroy.bill = {};                                                 // Object for show the bill
        billsDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the billsDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('billsDestroyCtrl init');
        }

        billsDestroy.goo = function(){
            $state.go('bills-index');
        }

        // Delete a resource
        function destroy(id) {

            return billsFactory.destroy(id).then(function(data) {

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
                billsDestroy.bill = data;
                return billsDestroy.bill;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
