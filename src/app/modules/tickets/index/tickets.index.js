(function() {

  'use strict';

    // Pass the ticketsIndexCtrl to the app
    angular
        .module('y')
        .controller('ticketsIndexCtrl', ticketsIndexCtrl);


    // Define the ticketsIndexCtrl
    function ticketsIndexCtrl(ticketsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define ticketsIndex as this for ControllerAs and auto-$scope
        var ticketsIndex = this;


        // Define the ticketsIndex functions and objects that will be passed to the view
        ticketsIndex.tickets = [];                                              // Array for list of tickets


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        index();

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the ticketsIndexCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('ticketsIndexCtrl init');
        }


        // Get all tickets.
        function index() {

            return ticketsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            ticketsIndex.tickets = data.data;
	            return ticketsIndex.tickets;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
