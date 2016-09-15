(function() {

  'use strict';

    // Pass the footerDirective to the app
    angular
        .module('y')
        .directive('footerDirective', footerDirective);


    // Define the footerDirective
    function footerDirective() {

        // Define directive
        var directive = {

                restrict: 'EA',
                templateUrl: 'app/shared/components/footer-component/footer-component.html',
                scope: {
                    footerString: '@',                      // Isolated scope string
                    footerAttribute: '=',                   // Isolated scope two-way data binding
                    footerAction: '&'                       // Isolated scope action
                },
                link: linkFunc,
                controller: footerDirectiveController,
                controllerAs: 'footerDirective'
        };

        // Return directive
        return directive;

        // Define link function
        function linkFunc(scope, el, attr, ctrl) {

            // Do stuff...
        }
    }

    // Define directive controller
    function footerDirectiveController() {

        // Do stuff...
    }

})();
