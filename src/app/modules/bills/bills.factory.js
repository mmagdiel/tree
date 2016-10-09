(function() {

  'use strict';

    // Pass the billsFactory to the app
    angular
        .module('y')
        .factory('billsFactory', billsFactory);


    // Define the billsFactory
    function billsFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("bills", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });


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

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified bill.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created bill in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified bill in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified bill from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();
