(function() {

  'use strict';

    // Pass the ticketsStoreCtrl to the app
    angular
        .module('y')
        .controller('ticketsStoreCtrl', ticketsStoreCtrl);


    // Define the ticketsStoreCtrl
    function ticketsStoreCtrl(ticketsFactory, userService, $state) {


        // Inject with ng-annotate
        "ngInject";


        // Define ticketsStore as this for ControllerAs and auto-$scope
        var ticketsStore = this;

        // Define the ticketsStore functions and objects that will be passed to the view
        ticketsStore.store = store;                                           // Store a resource
        ticketsStore.ticket = {}; 
        ticketsStore.data = {
            amount: []
        };

        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */


        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the ticketsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('ticketsStoreCtrl init');

            ticketsFactory.indexes()
            .then(function(data){
                ticketsStore.data.amount = data.data;
            })
            .catch(function(err){
                console.log('err');
            });

            ticketsStore.ticket.account_id = userService.getId();
            console.log(ticketsStore, userService);
        }


        // Delete a resource
        function store(data) {

            return ticketsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                if(data.passed){
                    $state.go("tickets-show", {
                        id: data.data.id
                    })
                }

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }

    }

})();
