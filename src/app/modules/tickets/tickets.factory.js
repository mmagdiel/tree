(function() {

  'use strict';

    // Pass the ticketsFactory to the app
    angular
        .module('y')
        .factory('ticketsFactory', ticketsFactory);


    // Define the ticketsFactory
    function ticketsFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for ticket ticket
        var ticketBase = '/api/tickets/';


        // Define the ticket factory object to return
        var ticketsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the ticket factory
        return ticketsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the ticketsFactory
        |
        */


        // Display a listing of tickets.
        function index() {

            return $http.get(ticketBase)
                        .then(function(data){ return data; });
        }


        // Display a specified ticket.
        function show(id) {

            return $http.get(ticketBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created ticket in storage.
        function store(data) {

            return $http.post(ticketBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified ticket in storage.
        function update(id, data) {

            return $http.put(ticketBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified ticket from storage.
        function destroy(id) {

            return $http.delete(ticketBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();
