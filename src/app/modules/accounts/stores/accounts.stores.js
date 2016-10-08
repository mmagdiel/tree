(function() {

  'use strict';

    // Pass the accountsStoreCtrl to the app
    angular
        .module('y')
        .controller('accountsStoresCtrl', accountsStoresCtrl);


    // Define the accountsStoreCtrl
    function accountsStoresCtrl(accountsFactory,$scope) {
		$scope.bandera=false;

        // Inject with ng-annotate
        "ngInject";


        // Define accountsStore as this for ControllerAs and auto-$scope
        var accountsStores = this;


        // Define the accountsStore functions and objects that will be passed to the view
        accountsStores.stores = store;                                           // Store a resource


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
        | Declaring all functions used in the accountsStoreCtrl
        |
        */


        // Sample for init function
        function initLog() {

            console.log('accountsStoresCtrl init');
        }


        // Delete a resource
        function store(data) {
			
            return accountsFactory.stores(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

            });
        }
    }

})();
