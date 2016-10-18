(function() {

  'use strict';

    // Pass the treesUpdateCtrl to the app
    angular
        .module('y')
        .controller('treesUpdateCtrl', treesUpdateCtrl);


    // Define the treesUpdateCtrl
    function treesUpdateCtrl(treesFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define treesUpdate as this for ControllerAs and auto-$scope
        var treesUpdate = this;


        // Define the treesUpdate functions and objects that will be passed to the view
        treesUpdate.tree = {};                                                  // Object for show the tree
        treesUpdate.update = update;                                            // Update a resource


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
        | Declaring all functions used in the treesUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('treesUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return treesFactory.update(id, data).then(function(data) {

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
                treesUpdate.tree = data;
                return treesUpdate.tree;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
