(function() {

  'use strict';

    // Pass the articlesUpdateCtrl to the app
    angular
        .module('y')
        .controller('articlesUpdateCtrl', articlesUpdateCtrl);


    // Define the articlesUpdateCtrl
    function articlesUpdateCtrl(articlesFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define articlesUpdate as this for ControllerAs and auto-$scope
        var articlesUpdate = this;


        // Define the articlesUpdate functions and objects that will be passed to the view
        articlesUpdate.article = {};                                                  // Object for show the article
        articlesUpdate.update = update;                                            // Update a resource


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
        | Declaring all functions used in the articlesUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('articlesUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return articlesFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the article
        function show(id) {

            return articlesFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                articlesUpdate.article = data;
                return articlesUpdate.article;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
