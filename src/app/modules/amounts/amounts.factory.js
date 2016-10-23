(function() {

  'use strict';

    // Pass the amountsFactory to the app
    angular
        .module('y')
        .factory('amountsFactory', amountsFactory);


    // Define the amountsFactory
    function amountsFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("amounts", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });


        // Define the amount factory object to return
        var amountsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the amount factory
        return amountsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the amountsFactory
        |
        */


        // Display a listing of amounts.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified amount.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created amount in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified amount in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified amount from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();
