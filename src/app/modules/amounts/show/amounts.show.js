(function() {

  'use strict';

    // Pass the amountsShowCtrl to the app
    angular
        .module('y')
        .controller('amountsShowCtrl', amountsShowCtrl);


    // Define the amountsShowCtrl
    function amountsShowCtrl(amountsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define amountsShow as this for ControllerAs and auto-$scope
        var amountsShow = this;


        // Define the amountsShow functions and objects that will be passed to the view
        amountsShow.amount = {};                                                // Object for show the amount


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
        | Declaring all functions used in the amountsShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('amountsShowCtrl init');
        }


        // Get the amount
        function show(id) {

            return amountsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            amountsShow.amount = data;
	            return amountsShow.amount;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
