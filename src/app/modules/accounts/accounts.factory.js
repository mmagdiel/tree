(function() {

  'use strict';

    // Pass the accountsFactory to the app
    angular
        .module('y')
        .factory('accountsFactory', accountsFactory);


    // Define the accountsFactory
    function accountsFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for account account
        var accountBase = '/api/accounts/';


        // Define the account factory object to return
        var accountsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the account factory
        return accountsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the accountsFactory
        |
        */


        // Display a listing of accounts.
        function index() {

            return $http.get(accountBase)
                        .then(function(data){ return data; });
        }


        // Display a specified account.
        function show(id) {

            return $http.get(accountBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created account in storage.
        function store(data) {

            return $http.post(accountBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified account in storage.
        function update(id, data) {

            return $http.put(accountBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified account from storage.
        function destroy(id) {

            return $http.delete(accountBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();
