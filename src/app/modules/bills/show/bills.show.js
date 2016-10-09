(function() {

  'use strict';

    // Pass the billsShowCtrl to the app
    angular
        .module('y')
        .controller('billsShowCtrl', billsShowCtrl);


    // Define the billsShowCtrl
    function billsShowCtrl(billsFactory, $stateParams, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define billsShow as this for ControllerAs and auto-$scope
        var billsShow = this;


        // Define the billsShow functions and objects that will be passed to the view
        billsShow.bill = {};                                                // Object for show the bill


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
        | Declaring all functions used in the billsShowCtrl
        |
        */

        billsShow.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Sample for init function
        function initLog() {

            console.log('billsShowCtrl init');
        }


        // Get the bill
        function show(id) {

            return billsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            billsShow.bill = data;
	            return billsShow.bill;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
