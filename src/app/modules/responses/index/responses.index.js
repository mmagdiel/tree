(function() {

  'use strict';

    // Pass the responsesIndexCtrl to the app
    angular
        .module('y')
        .controller('responsesIndexCtrl', responsesIndexCtrl);


    // Define the responsesIndexCtrl
    function responsesIndexCtrl(responsesFactory, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define responsesIndex as this for ControllerAs and auto-$scope
        var responsesIndex = this;


        // Define the responsesIndex functions and objects that will be passed to the view
        responsesIndex.responses = [];                                              // Array for list of responses


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
        | Declaring all functions used in the responsesIndexCtrl
        |
        */

        responsesIndex.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Sample for init function
        function initLog() {

            console.log('responsesIndexCtrl init');
        }


        // Get all responses.
        function index() {

            return responsesFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            responsesIndex.responses = data.data;
	            return responsesIndex.responses;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
