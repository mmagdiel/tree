(function() {

  'use strict';

    // Pass the staticsUpdateCtrl to the app
    angular
        .module('y')
        .controller('staticsUpdateCtrl', staticsUpdateCtrl);


    // Define the staticsUpdateCtrl
    function staticsUpdateCtrl(staticsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define staticsUpdate as this for ControllerAs and auto-$scope
        var staticsUpdate = this;


        // Define the staticsUpdate functions and objects that will be passed to the view
        staticsUpdate.static = {};                                                  // Object for show the static
        staticsUpdate.update = update;                                            // Update a resource


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
        | Declaring all functions used in the staticsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('staticsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return staticsFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the static
        function show(id) {

            return staticsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                staticsUpdate.static = data;
                return staticsUpdate.static;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
