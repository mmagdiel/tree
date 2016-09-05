(function() {

  'use strict';

    // Pass the adminsUpdateCtrl to the app
    angular
        .module('y')
        .controller('adminsUpdateCtrl', adminsUpdateCtrl);


    // Define the adminsUpdateCtrl
    function adminsUpdateCtrl(adminsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define adminsUpdate as this for ControllerAs and auto-$scope
        var adminsUpdate = this;


        // Define the adminsUpdate functions and objects that will be passed to the view
        adminsUpdate.admin = {};                                                  // Object for show the admin
        adminsUpdate.update = update;                                            // Update a resource


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
        | Declaring all functions used in the adminsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('adminsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return adminsFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the admin
        function show(id) {

            return adminsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                adminsUpdate.admin = data;
                return adminsUpdate.admin;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
