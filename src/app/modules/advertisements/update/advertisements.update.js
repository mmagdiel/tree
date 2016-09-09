(function() {

  'use strict';

    // Pass the advertisementsUpdateCtrl to the app
    angular
        .module('y')
        .controller('advertisementsUpdateCtrl', advertisementsUpdateCtrl);


    // Define the advertisementsUpdateCtrl
    function advertisementsUpdateCtrl(advertisementsFactory, $stateParams) {


        // Inject with ng-annotate
        "ngInject";


        // Define advertisementsUpdate as this for ControllerAs and auto-$scope
        var advertisementsUpdate = this;


        // Define the advertisementsUpdate functions and objects that will be passed to the view
        advertisementsUpdate.advertisement = {};                                                  // Object for show the advertisement
        advertisementsUpdate.update = update;                                            // Update a resource


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
        | Declaring all functions used in the advertisementsUpdateCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('advertisementsUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return advertisementsFactory.update(id, data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }


        // Get the advertisement
        function show(id) {

            return advertisementsFactory.show(id).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                // Assign data to array and return them
                advertisementsUpdate.advertisement = data;
                return advertisementsUpdate.advertisement;

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
