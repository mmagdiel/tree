(function() {

  'use strict';

    // Pass the articlesFactory to the app
    angular
        .module('y')
        .factory('articlesFactory', articlesFactory);


    // Define the articlesFactory
    function articlesFactory($resource, userService) {


        // Inject with ng-annotate
        "ngInject";


        // Define resource instance
        var resource = new $resource("articles", {
            headers: {
                "X-Access-Token": userService.getToken()
            }
        });

        // Define the article factory object to return
        var articlesFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the article factory
        return articlesFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the articlesFactory
        |
        */


        // Display a listing of articles.
        function index() {

            return resource.fetch()
                        .then(function(data){ return data; });
        }


        // Display a specified article.
        function show(id) {

            return resource.fetch(id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created article in storage.
        function store(data) {

            return resource.save(data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified article in storage.
        function update(id, data) {

            return resource.update(id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified article from storage.
        function destroy(id) {

            return resource.delete(id)
                        .then(function(data){ return data.data; });
        }

    }

})();
