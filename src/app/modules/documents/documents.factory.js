(function() {

  'use strict';

    // Pass the documentsFactory to the app
    angular
        .module('y')
        .factory('documentsFactory', documentsFactory);


    // Define the documentsFactory
    function documentsFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("documents", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });


        // Define the document factory object to return
        var documentsFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the document factory
        return documentsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the documentsFactory
        |
        */


        // Display a listing of documents.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified document.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created document in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified document in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified document from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();
