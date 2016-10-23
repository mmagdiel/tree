(function() {

  'use strict';

    // Pass the responsesShowCtrl to the app
    angular
        .module('y')
        .controller('responsesShowCtrl', responsesShowCtrl);


    // Define the responsesShowCtrl
    function responsesShowCtrl(responsesFactory, $stateParams, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define responsesShow as this for ControllerAs and auto-$scope
        var responsesShow = this;


        // Define the responsesShow functions and objects that will be passed to the view
        responsesShow.response = {};                                                // Object for show the response


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
        | Declaring all functions used in the responsesShowCtrl
        |
        */

        responsesShow.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Sample for init function
        function initLog() {

            console.log('responsesShowCtrl init');
        }


        // Get the response
        function show(id) {

            return responsesFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            responsesShow.response = data;
	            return responsesShow.response;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
