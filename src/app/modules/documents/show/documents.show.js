(function() {

  'use strict';

    // Pass the documentsShowCtrl to the app
    angular
        .module('y')
        .controller('documentsShowCtrl', documentsShowCtrl);


    // Define the documentsShowCtrl
    function documentsShowCtrl(documentsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define documentsShow as this for ControllerAs and auto-$scope
        var documentsShow = this;


        // Define the documentsShow functions and objects that will be passed to the view
        documentsShow.document = {};                                                // Object for show the document


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
        | Declaring all functions used in the documentsShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('documentsShowCtrl init');
        }


        // Get the document
        function show(id) {

            return documentsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            documentsShow.document = data;
	            return documentsShow.document;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
