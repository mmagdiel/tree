(function() {

  'use strict';

    // Pass the advertisementsDestroyCtrl to the app
    angular
        .module('y')
        .controller('advertisementsDestroyCtrl', advertisementsDestroyCtrl);


    // Define the advertisementsDestroyCtrl
    function advertisementsDestroyCtrl(advertisementsFactory, $stateParams, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define advertisementsDestroy as this for ControllerAs and auto-$scope
        var advertisementsDestroy = this;


        // Define the advertisementsDestroy functions and objects that will be passed to the view
        advertisementsDestroy.advertisement = {};                                                 // Object for show the advertisement
        advertisementsDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the advertisementsDestroyCtrl
        |
        */

        advertisementsDestroy.goo = function(){
            $state.go('advertisements-index');
        }

        // Sample for init function
        function initLog() {

            console.log('advertisementsDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return advertisementsFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the advertisement
        function show(id) {

            return advertisementsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                advertisementsDestroy.advertisement = data;
                return advertisementsDestroy.advertisement;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
