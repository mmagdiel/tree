(function() {

  'use strict';

    // Pass the identifierDirective to the app
    angular
        .module('y')
        .directive('identifierDirective', identifierDirective);


    // Define the identifierDirective
    function identifierDirective() {

        // Define directive
        var directive = {

                restrict: 'EA',
                templateUrl: 'app/shared/components/identifier-component/identifier-component.html',
                scope: {
                    identifierString: '@',                      // Isolated scope string
                    identifierAttribute: '=',                   // Isolated scope two-way data binding
                    identifierAction: '&'                       // Isolated scope action
                },
                link: linkFunc,
                controller: identifierDirectiveController,
                controllerAs: 'identifierDirective'
        };

        // Return directive
        return directive;

        // Define link function
        function linkFunc(scope, el, attr, ctrl) {

            // Do stuff...
        }
    }

    // Define directive controller
    function identifierDirectiveController(userService) {

        this.home ={ 
            user: userService.$user.username
        }
    }

})();
