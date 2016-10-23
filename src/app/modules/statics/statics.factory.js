(function() {

  'use strict';

    // Pass the staticsFactory to the app
    angular
        .module('y')
        .factory('staticsFactory', staticsFactory);


    // Define the staticsFactory
    function staticsFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("statics", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });

        // Define the static factory object to return
        var staticsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the static factory
        return staticsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the staticsFactory
        |
        */


        // Display a listing of statics.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified static.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created static in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified static in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified static from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();
