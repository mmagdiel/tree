(function() {

  'use strict';

    // Pass the treesDestroyCtrl to the app
    angular
        .module('y')
        .controller('treesDestroyCtrl', treesDestroyCtrl);


    // Define the treesDestroyCtrl
    function treesDestroyCtrl(treesFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define treesDestroy as this for ControllerAs and auto-$scope
        var treesDestroy = this;


        // Define the treesDestroy functions and objects that will be passed to the view
        treesDestroy.tree = {};                                                 // Object for show the tree
        treesDestroy.destroy = destroy;                                         // Delete a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the treesDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('treesDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return treesFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the tree
        function show(id) {

            return treesFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                treesDestroy.tree = data;
                return treesDestroy.tree;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
