(function() {

  'use strict';

    // Pass the ticketsUpdateCtrl to the app
    angular
        .module('y')
        .controller('ticketsUpdateCtrl', ticketsUpdateCtrl);


    // Define the ticketsUpdateCtrl
    function ticketsUpdateCtrl(ticketsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define ticketsUpdate as this for ControllerAs and auto-$scope
        var ticketsUpdate = this;


        // Define the ticketsUpdate functions and objects that will be passed to the view
        ticketsUpdate.ticket = {};                                                // Object for show the ticket
        ticketsUpdate.update = update;                                            // Update a resource


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
        | Declaring all functions used in the ticketsUpdateCtrl
        |
        */

        ticketsUpdate.view = function(){
            console.log(ticketsUpdate.ticket);
        }

        // Sample for init function
        function initLog() {

            console.log('ticketsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return ticketsFactory.update(id, data).then(function(data) {

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
                ticketsUpdate.ticket = data;
                ticketsUpdate.ticket.targeta = ['VISA','MASTERCARD'];
                return ticketsUpdate.ticket;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
