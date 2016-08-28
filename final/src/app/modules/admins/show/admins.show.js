(function() {

  'use strict';

    // Pass the adminsShowCtrl to the app
    angular
        .module('y')
        .controller('adminsShowCtrl', adminsShowCtrl);


    // Define the adminsShowCtrl
    function adminsShowCtrl(adminsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define adminsShow as this for ControllerAs and auto-$scope
        var adminsShow = this;


        // Define the adminsShow functions and objects that will be passed to the view
        adminsShow.admin = {};                                                // Object for show the admin


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
        | Declaring all functions used in the adminsShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('adminsShowCtrl init');
        }


        // Get the admin
        function show(id) {

            return adminsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            adminsShow.admin = data;
	            return adminsShow.admin;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
