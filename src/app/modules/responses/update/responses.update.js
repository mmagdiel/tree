(function() {

  'use strict';

    // Pass the responsesUpdateCtrl to the app
    angular
        .module('y')
        .controller('responsesUpdateCtrl', responsesUpdateCtrl);


    // Define the responsesUpdateCtrl
    function responsesUpdateCtrl(responsesFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define responsesUpdate as this for ControllerAs and auto-$scope
        var responsesUpdate = this;


        // Define the responsesUpdate functions and objects that will be passed to the view
        responsesUpdate.response = {};                                                  // Object for show the response
        responsesUpdate.update = update;                                            // Update a resource


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
        | Declaring all functions used in the responsesUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('responsesUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return responsesFactory.update(id, data).then(function(data) {

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
                responsesUpdate.response = data;
                return responsesUpdate.response;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
