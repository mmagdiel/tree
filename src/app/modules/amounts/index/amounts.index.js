(function() {

  'use strict';

    // Pass the amountsIndexCtrl to the app
    angular
        .module('y')
        .controller('amountsIndexCtrl', amountsIndexCtrl);


    // Define the amountsIndexCtrl
    function amountsIndexCtrl(amountsFactory, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define amountsIndex as this for ControllerAs and auto-$scope
        var amountsIndex = this;


        // Define the amountsIndex functions and objects that will be passed to the view
        amountsIndex.amounts = [];                                              // Array for list of amounts


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
        | Declaring all functions used in the amountsIndexCtrl
        |
        */

        amountsIndex.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Sample for init function
        function initLog() {

            console.log('amountsIndexCtrl init');
        }


        // Get all amounts.
        function index() {

            return amountsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            amountsIndex.amounts = data.data;
	            return amountsIndex.amounts;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
