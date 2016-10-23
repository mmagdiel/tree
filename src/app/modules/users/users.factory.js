(function() {

  'use strict';

    // Pass the usersFactory to the app
    angular
        .module('y')
        .factory('usersFactory', usersFactory);


    // Define the usersFactory
    function usersFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("users", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });


        // Define the user factory object to return
        var usersFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the user factory
        return usersFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersFactory
        |
        */


        // Display a listing of users.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified user.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created user in storage.
        function store(data) {

             return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified user in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified user from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();
