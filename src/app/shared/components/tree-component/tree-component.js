(function() {

  'use strict';

    // Pass the treeDirective to the app
    angular
        .module('tree')
        .directive('treeDirective', treeDirective);


    // Define the treeDirective
    function treeDirective() {

        // Define directive
        var directive = {

                restrict: 'EA',
                templateUrl: 'app/shared/components/tree-component/tree-component.html',
                scope: {
                    treeString: '@',                      // Isolated scope string
                    treeAttribute: '=',                   // Isolated scope two-way data binding
                    treeAction: '&'                       // Isolated scope action
                },
                link: linkFunc,
                controller: treeDirectiveController,
                controllerAs: 'treeDirective'
        };

        // Return directive
        return directive;

        // Define link function
        function linkFunc(scope, el, attr, ctrl) {

            // Do stuff...
        }
    }

    // Define directive controller
    function treeDirectiveController() {

        // Do stuff...
    }

})();
