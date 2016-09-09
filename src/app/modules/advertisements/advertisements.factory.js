(function() {

  'use strict';

    // Pass the advertisementsFactory to the app
    angular
        .module('y')
        .factory('advertisementsFactory', advertisementsFactory);


    // Define the advertisementsFactory
    function advertisementsFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for advertisement advertisement
        var advertisementBase = '/api/advertisements/';


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

            return $http.get(advertisementBase)
                        .then(function(data){ return data; });
        }


        // Display a specified advertisement.
        function show(id) {

            return $http.get(advertisementBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created advertisement in storage.
        function store(data) {

            return $http.post(advertisementBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified advertisement in storage.
        function update(id, data) {

            return $http.put(advertisementBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified advertisement from storage.
        function destroy(id) {

            return $http.delete(advertisementBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();
