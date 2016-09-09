(function() {

  'use strict';

    // Pass the advertisementsIndexCtrl to the app
    angular
        .module('y')
        .controller('advertisementsIndexCtrl', advertisementsIndexCtrl);


    // Define the advertisementsIndexCtrl
    function advertisementsIndexCtrl(advertisementsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define advertisementsIndex as this for ControllerAs and auto-$scope
        var advertisementsIndex = this;


        // Define the advertisementsIndex functions and objects that will be passed to the view
        advertisementsIndex.advertisements = [];                                              // Array for list of advertisements


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
        | Declaring all functions used in the advertisementsIndexCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('advertisementsIndexCtrl init');
        }


        // Get all advertisements.
        function index() {

            return advertisementsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            advertisementsIndex.advertisements = data.data;
	            return advertisementsIndex.advertisements;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
