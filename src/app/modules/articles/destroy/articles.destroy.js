(function() {

  'use strict';

    // Pass the articlesDestroyCtrl to the app
    angular
        .module('y')
        .controller('articlesDestroyCtrl', articlesDestroyCtrl);


    // Define the articlesDestroyCtrl
    function articlesDestroyCtrl(articlesFactory, $stateParams, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define articlesDestroy as this for ControllerAs and auto-$scope
        var articlesDestroy = this;


        // Define the articlesDestroy functions and objects that will be passed to the view
        articlesDestroy.article = {};                                                 // Object for show the article
        articlesDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the articlesDestroyCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('articlesDestroyCtrl init');
        }

        articlesDestroy.goo = function(){
            $state.go('articles-index');
        }


        // Delete a resource
        function destroy(id) {

            return articlesFactory.destroy(id).then(function(data) {

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
                articlesDestroy.article = data;
                return articlesDestroy.article;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
