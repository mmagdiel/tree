(function() {

  'use strict';

    // Pass the responsesFactory to the app
    angular
        .module('y')
        .factory('responsesFactory', responsesFactory);


    // Define the responsesFactory
    function responsesFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("responses", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });


        // Define the response factory object to return
        var responsesFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the response factory
        return responsesFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the responsesFactory
        |
        */


        // Display a listing of responses.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified response.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created response in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified response in storage.
        function update(id, data) {
            
            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified response from storage.
        function destroy(id) {

            return $http.delete(responseBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();
