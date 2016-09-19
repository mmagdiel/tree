(function() {

  'use strict';

    // Pass the amountsFactory to the app
    angular
        .module('y')
        .factory('amountsFactory', amountsFactory);


    // Define the amountsFactory
    function amountsFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for amount amount
        var amountBase = '/api/amounts/';


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

            return $http.get(amountBase)
                        .then(function(data){ return data; });
        }


        // Display a specified amount.
        function show(id) {

            return $http.get(amountBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created amount in storage.
        function store(data) {

            return $http.post(amountBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified amount in storage.
        function update(id, data) {

            return $http.put(amountBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified amount from storage.
        function destroy(id) {

            return $http.delete(amountBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();
