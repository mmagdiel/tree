(function() {

  'use strict';

    // Pass the ticketsShowCtrl to the app
    angular
        .module('y')
        .controller('ticketsShowCtrl', ticketsShowCtrl);


    // Define the ticketsShowCtrl
    function ticketsShowCtrl(ticketsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define ticketsShow as this for ControllerAs and auto-$scope
        var ticketsShow = this;


        // Define the ticketsShow functions and objects that will be passed to the view
        ticketsShow.ticket = {};                                                // Object for show the ticket


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
        | Declaring all functions used in the ticketsShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('ticketsShowCtrl init');
        }


        // Get the ticket
        function show(id) {

            return ticketsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            ticketsShow.ticket = data;
	            return ticketsShow.ticket;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
