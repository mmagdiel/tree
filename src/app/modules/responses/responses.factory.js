(function() {

  'use strict';

    // Pass the responsesFactory to the app
    angular
        .module('y')
        .factory('responsesFactory', responsesFactory);


    // Define the responsesFactory
    function responsesFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for response response
        var responseBase = '/api/responses/';


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

            return $http.get(responseBase)
                        .then(function(data){ return data; });
        }


        // Display a specified response.
        function show(id) {

            return $http.get(responseBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created response in storage.
        function store(data) {

            return $http.post(responseBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified response in storage.
        function update(id, data) {

            return $http.put(responseBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified response from storage.
        function destroy(id) {

            return $http.delete(responseBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();
