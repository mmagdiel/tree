(function() {

  'use strict';

    // Pass the responsesDestroyCtrl to the app
    angular
        .module('y')
        .controller('responsesDestroyCtrl', responsesDestroyCtrl);


    // Define the responsesDestroyCtrl
    function responsesDestroyCtrl(responsesFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define responsesDestroy as this for ControllerAs and auto-$scope
        var responsesDestroy = this;


        // Define the responsesDestroy functions and objects that will be passed to the view
        responsesDestroy.response = {};                                                 // Object for show the response
        responsesDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the responsesDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('responsesDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return responsesFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the response
        function show(id) {

            return responsesFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                responsesDestroy.response = data;
                return responsesDestroy.response;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
