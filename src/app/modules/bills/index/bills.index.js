(function() {

  'use strict';

    // Pass the billsIndexCtrl to the app
    angular
        .module('y')
        .controller('billsIndexCtrl', billsIndexCtrl);


    // Define the billsIndexCtrl
    function billsIndexCtrl(billsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define billsIndex as this for ControllerAs and auto-$scope
        var billsIndex = this;


        // Define the billsIndex functions and objects that will be passed to the view
        billsIndex.bills = [];                                              // Array for list of bills


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
        | Declaring all functions used in the billsIndexCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('billsIndexCtrl init');
        }


        // Get all bills.
        function index() {

            return billsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            billsIndex.bills = data.data;
	            return billsIndex.bills;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
