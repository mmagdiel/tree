(function() {

  'use strict';

    // Pass the billsFactory to the app
    angular
        .module('y')
        .factory('billsFactory', billsFactory);


    // Define the billsFactory
    function billsFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for bill bill
        var billBase = '/api/bills/';


        // Define the bill factory object to return
        var billsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the bill factory
        return billsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the billsFactory
        |
        */


        // Display a listing of bills.
        function index() {

            return $http.get(billBase)
                        .then(function(data){ return data; });
        }


        // Display a specified bill.
        function show(id) {

            return $http.get(billBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created bill in storage.
        function store(data) {

            return $http.post(billBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified bill in storage.
        function update(id, data) {

            return $http.put(billBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified bill from storage.
        function destroy(id) {

            return $http.delete(billBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();
