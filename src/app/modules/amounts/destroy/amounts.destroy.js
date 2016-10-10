(function() {

  'use strict';

    // Pass the amountsDestroyCtrl to the app
    angular
        .module('y')
        .controller('amountsDestroyCtrl', amountsDestroyCtrl);


    // Define the amountsDestroyCtrl
    function amountsDestroyCtrl(amountsFactory, $stateParams, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define amountsDestroy as this for ControllerAs and auto-$scope
        var amountsDestroy = this;


        // Define the amountsDestroy functions and objects that will be passed to the view
        amountsDestroy.amount = {};                                                 // Object for show the amount
        amountsDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the amountsDestroyCtrl
        |
        */

        amountsDestroy.goo = function(){
            $state.go('amounts-index');
        }

        // Sample for init function
        function initLog() {

            console.log('amountsDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return amountsFactory.destroy(id).then(function(data) {

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
                amountsDestroy.amount = data;
                return amountsDestroy.amount;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
