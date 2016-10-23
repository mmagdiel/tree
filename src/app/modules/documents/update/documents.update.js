(function() {

  'use strict';

    // Pass the documentsUpdateCtrl to the app
    angular
        .module('y')
        .controller('documentsUpdateCtrl', documentsUpdateCtrl);


    // Define the documentsUpdateCtrl
    function documentsUpdateCtrl(documentsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define documentsUpdate as this for ControllerAs and auto-$scope
        var documentsUpdate = this;


        // Define the documentsUpdate functions and objects that will be passed to the view
        documentsUpdate.document = {};                                                  // Object for show the document
        documentsUpdate.update = update;                                            // Update a resource


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
        | Declaring all functions used in the documentsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('documentsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return documentsFactory.update(id, data).then(function(data) {

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
                documentsUpdate.document = data;
                return documentsUpdate.document;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
