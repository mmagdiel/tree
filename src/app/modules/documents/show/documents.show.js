(function() {

  'use strict';

    // Pass the documentsShowCtrl to the app
    angular
        .module('y')
        .controller('documentsShowCtrl', documentsShowCtrl);


    // Define the documentsShowCtrl
    function documentsShowCtrl(documentsFactory, $stateParams, $state, FileSaver) {


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

        documentsShow.go = function(state,id){
            $state.go(state,{
                id: id
            });
        }

        // Download the file from the server
        documentsShow.download = function(){
            console.log("download", $stateParams.id);
            documentsFactory.download($stateParams.id)
                .then(function(data, status){
                   // Save the data as file in browser
                   saveFile(data.data, data.headers("Content-Type"));
                })
                .catch(function(err){
                    console.error(err);
                });
        }

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

        // Prompt a file saving
        function saveFile(data, header){
            var extensions = {
                "application/pdf": ".pdf",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx"
            }

            FileSaver.saveAs(data, documentsShow.document.name + extensions[header]);
        }
    }

})();
