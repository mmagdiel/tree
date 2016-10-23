(function() {

  'use strict';

    // Pass the documentsDestroyCtrl to the app
    angular
        .module('y')
        .controller('documentsDestroyCtrl', documentsDestroyCtrl);


    // Define the documentsDestroyCtrl
    function documentsDestroyCtrl(documentsFactory, $stateParams, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define documentsDestroy as this for ControllerAs and auto-$scope
        var documentsDestroy = this;


        // Define the documentsDestroy functions and objects that will be passed to the view
        documentsDestroy.document = {};                                                 // Object for show the document
        documentsDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the documentsDestroyCtrl
        |
        */

        documentsDestroy.goo = function(){
            $state.go('documents-index');
        }

        // Sample for init function
        function initLog() {

            console.log('documentsDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return documentsFactory.destroy(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

            	// Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the document
        function show(id) {

            return documentsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                documentsDestroy.document = data;
                return documentsDestroy.document;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
