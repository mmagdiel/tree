(function() {

  'use strict';

    // Pass the accountsDirective to the app
    angular
        .module('y')
        .directive('accountsDirective', accountsDirective);


    // Define the accountsDirective
    function accountsDirective() {

        // Define directive
        var directive = {

                restrict: 'EA',
                templateUrl: 'app/shared/components/accounts-component/accounts-component.html',
                scope: {
                    accountsString: '@',                      // Isolated scope string
                    accountsAttribute: '=',                   // Isolated scope two-way data binding
                    accountsAction: '&'                       // Isolated scope action
                },
                link: linkFunc,
                controller: accountsDirectiveController,
                controllerAs: 'accountsDirective'
        };

        // Return directive
        return directive;

        // Define link function
        function linkFunc(scope, el, attr, ctrl) {

            // Do stuff...
        }
    }

    // Define directive controller
    function accountsDirectiveController() {

        // Do stuff...
    }

})();
