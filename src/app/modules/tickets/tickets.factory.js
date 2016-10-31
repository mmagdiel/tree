(function() {

  'use strict';

    // Pass the ticketsFactory to the app
    angular
        .module('y')
        .factory('ticketsFactory', ticketsFactory);


    // Define the ticketsFactory
    function ticketsFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("tickets", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });

                // Define resource instance
        var resources = new $resource("amounts", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });

        // Define the ticket factory object to return
        var ticketsFactory = {

            indexes: indexes,
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

            return resource.fetch()
                        .then(function(data){ return data; });
        }

        // Display a listing of amounts.
        function indexes() {

            return resources.fetch()
                        .then(function(data){ return data; });
        }

        // Display a specified ticket.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created ticket in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified ticket in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified ticket from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();
