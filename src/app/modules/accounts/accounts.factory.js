(function() {

  'use strict';

    // Pass the accountsFactory to the app
    angular
        .module('y')
        .factory('accountsFactory', accountsFactory);


    // Define the accountsFactory
    function accountsFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("accounts", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });


        // Define the account factory object to return
        var accountsFactory = {

            index: index,
            show: show,
            store: store,
            stores: stores,
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

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified account.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created account in storage.
        function store(data) {

            return resource.save(null, data)
                        .then(function(data){ return data.data; });
        }

        // Store a newly created account in storage.
        function stores(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified account in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified account from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();
