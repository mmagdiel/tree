(function() {

  'use strict';

    // Pass the adminsDestroyCtrl to the app
    angular
        .module('y')
        .controller('adminsDestroyCtrl', adminsDestroyCtrl);


    // Define the adminsDestroyCtrl
    function adminsDestroyCtrl(adminsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define adminsDestroy as this for ControllerAs and auto-$scope
        var adminsDestroy = this;


        // Define the adminsDestroy functions and objects that will be passed to the view
        adminsDestroy.admin = {};                                                 // Object for show the admin
        adminsDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the adminsDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('adminsDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return adminsFactory.destroy(id).then(function(data) {

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
                adminsDestroy.admin = data;
                return adminsDestroy.admin;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
