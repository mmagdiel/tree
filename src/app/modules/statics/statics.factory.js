(function() {

  'use strict';

    // Pass the staticsFactory to the app
    angular
        .module('y')
        .factory('staticsFactory', staticsFactory);


    // Define the staticsFactory
    function staticsFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for static static
        var staticBase = '/api/statics/';


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

            return $http.get(staticBase)
                        .then(function(data){ return data; });
        }


        // Display a specified static.
        function show(id) {

            return $http.get(staticBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created static in storage.
        function store(data) {

            return $http.post(staticBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified static in storage.
        function update(id, data) {

            return $http.put(staticBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified static from storage.
        function destroy(id) {

            return $http.delete(staticBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();
