(function() {

  'use strict';

    // Pass the accountsStoreCtrl to the app
    angular
        .module('y')
        .controller('accountsStoreCtrl', accountsStoreCtrl);


    // Define the accountsStoreCtrl
    function accountsStoreCtrl(accountsFactory, $mdDialog) {

        // Inject with ng-annotate
        "ngInject";


        // Define accountsStore as this for ControllerAs and auto-$scope
        var accountsStore = this;


        // Define the accountsStore functions and objects that will be passed to the view
        accountsStore.store = store;                                           // Store a resource

        accountsStore.bandera = false;

        accountsStore.form = {
            username: null,
            password: null,
            repassword: null
        };

        accountsStore.register = function(){
            if(!accountsStore.bandera){
                var dialogAlert = $mdDialog.alert({
                    title: "Error",
                    textContent: "Usted no ha aceptado los terminos y condiciones",
                    ok: "Ok"
                });

                $mdDialog.show(dialogAlert);
            }

            else if(accountsStore.form.password != accountsStore.form.repassword){
                var dialogAlert = $mdDialog.alert({
                    title: "Error",
                    textContent: "Las contrasenas no coinciden",
                    ok: "Ok"
                });

                $mdDialog.show(dialogAlert);
            }

            else{
                store(accountsStore.form);
            }
        }


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

            console.log('accountsStoreCtrl init');
        }


        // Delete a resource
        function store(data) {
			
            return accountsFactory.store(data).then(function(data) {

                // Custom function for success handling
                console.log('Result form API with SUCCESS', data);

                var dialogAlert;
                if(data.passed){
                    dialogAlert = $mdDialog.alert({
                        title: "Registro",
                        textContent: "Usuario registrado con exito",
                        ok: "Ok"
                    });
                }
                else{
                    dialogAlert = $mdDialog.alert({
                        title: "Error",
                        textContent: "Uno de los campos no cumple los requerimientos",
                        ok: "Ok"
                    });
                }
                $mdDialog.show(dialogAlert);

            }, function(data) {

                // Custom function for error handling
                console.log('Result form API with ERROR', data);

                var dialogAlert = $mdDialog.alert({
                    title: "Error",
                    textContent: "Error en la comunicacion con el servicio, intente de nuevo mas tarde.",
                    ok: "Ok"
                });
                $mdDialog.show(dialogAlert);
            });
        }
    }

})();
