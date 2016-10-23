(function() {

  'use strict';

    // Pass the treesFactory to the app
    angular
        .module('y')
        .factory('treesFactory', treesFactory);


    // Define the treesFactory
    function treesFactory($http) {


        // Inject with ng-annotate
        "ngInject";


        // Define base URI for tree tree
        var treeBase = '/api/trees/';


        // Define the tree factory object to return
        var treesFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the tree factory
        return treesFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the treesFactory
        |
        */


        // Display a listing of trees.
        function index() {

            return $http.get(treeBase)
                        .then(function(data){ return data; });
        }


        // Display a specified tree.
        function show(id) {

            return $http.get(treeBase + id)
                        .then(function(data){ return data.data; });
        }


        // Store a newly created tree in storage.
        function store(data) {

            return $http.post(treeBase, data)
                        .then(function(data){ return data.data; });
        }


        // Update the specified tree in storage.
        function update(id, data) {

            return $http.put(treeBase + id, data)
                        .then(function(data){ return data.data; });
        }


        // Remove the specified tree from storage.
        function destroy(id) {

            return $http.delete(treeBase + id)
                        .then(function(data){ return data.data; });
        }

    }

})();
