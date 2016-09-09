(function() {

  'use strict';

    // Pass the articlesFactory to the app
    angular
        .module('y')
        .factory('articlesFactory', articlesFactory);


    // Define the articlesFactory
    function articlesFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for article article
        var articleBase = '/api/articles/';


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

            return $http.get(articleBase)
                        .then(function(data){ return data; });
        }


        // Display a specified article.
        function show(id) {

            return $http.get(articleBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created article in storage.
        function store(data) {

            return $http.post(articleBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified article in storage.
        function update(id, data) {

            return $http.put(articleBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified article from storage.
        function destroy(id) {

            return $http.delete(articleBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();
