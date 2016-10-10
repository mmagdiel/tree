(function() {

  'use strict';

    // Pass the ticketsDestroyCtrl to the app
    angular
        .module('y')
        .controller('ticketsDestroyCtrl', ticketsDestroyCtrl);


    // Define the ticketsDestroyCtrl
    function ticketsDestroyCtrl(ticketsFactory, $stateParams, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define ticketsDestroy as this for ControllerAs and auto-$scope
        var ticketsDestroy = this;


        // Define the ticketsDestroy functions and objects that will be passed to the view
        ticketsDestroy.ticket = {};                                                 // Object for show the ticket
        ticketsDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the ticketsDestroyCtrl
        |
        */

        ticketsDestroy.goo = function(){
            $state.go('tickets-index');
        }

        // Sample for init function
        function initLog() {

            console.log('ticketsDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return ticketsFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the ticket
        function show(id) {

            return ticketsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                ticketsDestroy.ticket = data;
                return ticketsDestroy.ticket;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
