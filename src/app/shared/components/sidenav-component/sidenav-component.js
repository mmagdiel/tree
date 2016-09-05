(function() {

  'use strict';

    // Pass the sidenavDirective to the app
    angular
        .module('y')
        .directive('sidenavDirective', sidenavDirective);


    // Define the sidenavDirective
    function sidenavDirective() {

        // Define directive
        var directive = {

                restrict: 'EA',
                templateUrl: 'app/shared/components/sidenav-component/sidenav-component.html',
                scope: {},
                link: linkFunc,
                controller: sidenavDirectiveController,
                controllerAs: 'sidenavDirective'
        };

        // Return directive
        return directive;

        // Define link function
        function linkFunc(scope, el, attr, ctrl) {

            // Do stuff...
        }
    }

    // Define directive controller
    function sidenavDirectiveController() {

        // Do stuff...
    }

})();
