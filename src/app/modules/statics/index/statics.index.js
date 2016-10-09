(function() {

  'use strict';

    // Pass the staticsIndexCtrl to the app
    angular
        .module('y')
        .controller('staticsIndexCtrl', staticsIndexCtrl);


    // Define the staticsIndexCtrl
    function staticsIndexCtrl(staticsFactory, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define staticsIndex as this for ControllerAs and auto-$scope
        var staticsIndex = this;


        // Define the staticsIndex functions and objects that will be passed to the view
        staticsIndex.statics = [];                                              // Array for list of statics


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
        | Declaring all functions used in the staticsIndexCtrl
        |
        */

        staticsIndex.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Sample for init function
        function initLog() {

            console.log('staticsIndexCtrl init');
        }


        // Get all statics.
        function index() {

            return staticsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            staticsIndex.statics = data.data;
	            return staticsIndex.statics;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
