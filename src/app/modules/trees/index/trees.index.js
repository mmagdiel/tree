(function() {

  'use strict';

    // Pass the treesIndexCtrl to the app
    angular
        .module('y')
        .controller('treesIndexCtrl', treesIndexCtrl);


    // Define the treesIndexCtrl
    function treesIndexCtrl(treesFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define treesIndex as this for ControllerAs and auto-$scope
        var treesIndex = this;


        // Define the treesIndex functions and objects that will be passed to the view
        treesIndex.trees = [];                                              // Array for list of trees


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();
        index();

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the treesIndexCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('treesIndexCtrl init');
        }


        // Get all trees.
        function index() {

            return treesFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            treesIndex.trees = data.data;
	            return treesIndex.trees;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
