(function() {

    'use strict';

    // Pass the documentssValidator to the app
    angular
    .module('y')
        .run(documentssValidator);


    // Define the documentssValidator
    function documentssValidator(validatorHelper) {


        // Inject with ng-annotate
        "ngInject";


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        validatorHelper.configureValidators(getValidators()); // Intercept all the api and add them to the httpBackend



        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the documentssValidator
        |
        */



        // Function that pass the array that will create the model validator
        function getValidators() {

            // Object to pass with validation rules
            return {};

        }
    }

})();
