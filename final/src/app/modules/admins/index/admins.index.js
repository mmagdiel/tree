(function() {

  'use strict';

    // Pass the adminsIndexCtrl to the app
    angular
        .module('y')
        .controller('adminsIndexCtrl', adminsIndexCtrl);


    // Define the adminsIndexCtrl
    function adminsIndexCtrl(adminsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define adminsIndex as this for ControllerAs and auto-$scope
        var adminsIndex = this;


        // Define the adminsIndex functions and objects that will be passed to the view
        adminsIndex.admins = [];                                              // Array for list of admins


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
        | Declaring all functions used in the adminsIndexCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('adminsIndexCtrl init');
        }


        // Get all admins.
        function index() {

            return adminsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            adminsIndex.admins = data.data;
	            return adminsIndex.admins;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
