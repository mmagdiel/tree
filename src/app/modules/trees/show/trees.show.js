(function() {

  'use strict';

    // Pass the treesShowCtrl to the app
    angular
        .module('y')
        .controller('treesShowCtrl', treesShowCtrl);


    // Define the treesShowCtrl
    function treesShowCtrl(treesFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define treesShow as this for ControllerAs and auto-$scope
        var treesShow = this;


        // Define the treesShow functions and objects that will be passed to the view
        treesShow.tree = {};                                                // Object for show the tree


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
        | Declaring all functions used in the treesShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('treesShowCtrl init');
        }


        // Get the tree
        function show(id) {

            return treesFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            treesShow.tree = data;
	            return treesShow.tree;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
