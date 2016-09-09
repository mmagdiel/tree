(function() {

  'use strict';

    // Pass the staticsShowCtrl to the app
    angular
        .module('y')
        .controller('staticsShowCtrl', staticsShowCtrl);


    // Define the staticsShowCtrl
    function staticsShowCtrl(staticsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define staticsShow as this for ControllerAs and auto-$scope
        var staticsShow = this;


        // Define the staticsShow functions and objects that will be passed to the view
        staticsShow.static = {};                                                // Object for show the static


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
        | Declaring all functions used in the staticsShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('staticsShowCtrl init');
        }


        // Get the static
        function show(id) {

            return staticsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            staticsShow.static = data;
	            return staticsShow.static;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
