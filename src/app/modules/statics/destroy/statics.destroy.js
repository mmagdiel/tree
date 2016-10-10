(function() {

  'use strict';

    // Pass the staticsDestroyCtrl to the app
    angular
        .module('y')
        .controller('staticsDestroyCtrl', staticsDestroyCtrl);


    // Define the staticsDestroyCtrl
    function staticsDestroyCtrl(staticsFactory, $stateParams, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define staticsDestroy as this for ControllerAs and auto-$scope
        var staticsDestroy = this;


        // Define the staticsDestroy functions and objects that will be passed to the view
        staticsDestroy.static = {};                                                 // Object for show the static
        staticsDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the staticsDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('staticsDestroyCtrl init');
        }

        staticsDestroy.goo = function(){
            $state.go('statics-index');
        }

        // Delete a resource
        function destroy(id) {

            return staticsFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the static
        function show(id) {

            return staticsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                staticsDestroy.static = data;
                return staticsDestroy.static;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
