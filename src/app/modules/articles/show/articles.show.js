(function() {

  'use strict';

    // Pass the articlesShowCtrl to the app
    angular
        .module('y')
        .controller('articlesShowCtrl', articlesShowCtrl);


    // Define the articlesShowCtrl
    function articlesShowCtrl(articlesFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define articlesShow as this for ControllerAs and auto-$scope
        var articlesShow = this;


        // Define the articlesShow functions and objects that will be passed to the view
        articlesShow.article = {};                                                // Object for show the article


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
        | Declaring all functions used in the articlesShowCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('articlesShowCtrl init');
        }


        // Get the article
        function show(id) {

            return articlesFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            articlesShow.article = data;
	            return articlesShow.article;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
