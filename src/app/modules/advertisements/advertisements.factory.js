(function() {

  'use strict';

    // Pass the advertisementsFactory to the app
    angular
        .module('y')
        .factory('advertisementsFactory', advertisementsFactory);


    // Define the advertisementsFactory
    function advertisementsFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("advertisements", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });


        // Define the advertisement factory object to return
        var advertisementsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the advertisement factory
        return advertisementsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the advertisementsFactory
        |
        */


        // Display a listing of advertisements.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified advertisement.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created advertisement in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified advertisement in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified advertisement from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();
