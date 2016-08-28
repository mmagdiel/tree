(function() {

  'use strict';

    // Pass the adminsFactory to the app
    angular
        .module('y')
        .factory('adminsFactory', adminsFactory);


    // Define the adminsFactory
    function adminsFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for admin admin
        var adminBase = '/api/admins/';


        // Define the admin factory object to return
        var adminsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the admin factory
        return adminsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the adminsFactory
        |
        */


        // Display a listing of admins.
        function index() {

            return $http.get(adminBase)
                        .then(function(data){ return data; });
        }


        // Display a specified admin.
        function show(id) {

            return $http.get(adminBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created admin in storage.
        function store(data) {

            return $http.post(adminBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified admin in storage.
        function update(id, data) {

            return $http.put(adminBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified admin from storage.
        function destroy(id) {

            return $http.delete(adminBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();
