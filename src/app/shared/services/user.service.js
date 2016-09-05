(function() {

  'use strict';

    // Pass the userService to the app
    angular
        .module('y')
        .factory('userService', userService);


    // Define the userService
    function userService() {


        // Inject with ng-annotate
        "ngInject";


        // Define the user factory object to return
        var userService = {

            init: init

        };


        // Return the user factory
        return userService;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the userService
        |
        */


        // Display a listing of user.
        function init() {

            console.log('Init user factory');
        }

    }

})();
