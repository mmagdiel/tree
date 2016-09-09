(function() {

  'use strict';

    // Pass the documentsIndexCtrl to the app
    angular
        .module('y')
        .controller('documentsIndexCtrl', documentsIndexCtrl);


    // Define the documentsIndexCtrl
    function documentsIndexCtrl(documentsFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define documentsIndex as this for ControllerAs and auto-$scope
        var documentsIndex = this;


        // Define the documentsIndex functions and objects that will be passed to the view
        documentsIndex.documents = [];                                              // Array for list of documents


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
        | Declaring all functions used in the documentsIndexCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('documentsIndexCtrl init');
        }


        // Get all documents.
        function index() {

            return documentsFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            documentsIndex.documents = data.data;
	            return documentsIndex.documents;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
