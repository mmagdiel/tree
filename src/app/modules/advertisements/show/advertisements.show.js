(function() {

  'use strict';

    // Pass the advertisementsShowCtrl to the app
    angular
        .module('y')
        .controller('advertisementsShowCtrl', advertisementsShowCtrl);


    // Define the advertisementsShowCtrl
    function advertisementsShowCtrl(advertisementsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define advertisementsShow as this for ControllerAs and auto-$scope
        var advertisementsShow = this;


        // Define the advertisementsShow functions and objects that will be passed to the view
        advertisementsShow.advertisement = {};                                                // Object for show the advertisement


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
        | Declaring all functions used in the advertisementsShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('advertisementsShowCtrl init');
        }


        // Get the advertisement
        function show(id) {

            return advertisementsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            advertisementsShow.advertisement = data;
	            return advertisementsShow.advertisement;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
