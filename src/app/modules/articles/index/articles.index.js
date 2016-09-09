(function() {

  'use strict';

    // Pass the articlesIndexCtrl to the app
    angular
        .module('y')
        .controller('articlesIndexCtrl', articlesIndexCtrl);


    // Define the articlesIndexCtrl
    function articlesIndexCtrl(articlesFactory) {


        // Inject with ng-annotate
        "ngInject";


        // Define articlesIndex as this for ControllerAs and auto-$scope
        var articlesIndex = this;


        // Define the articlesIndex functions and objects that will be passed to the view
        articlesIndex.articles = [];                                              // Array for list of articles


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
        | Declaring all functions used in the articlesIndexCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('articlesIndexCtrl init');
        }


        // Get all articles.
        function index() {

            return articlesFactory.index().then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            	// Assign data to array and return them
	            articlesIndex.articles = data.data;
	            return articlesIndex.articles;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
