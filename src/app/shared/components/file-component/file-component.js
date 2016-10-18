(function() {

  'use strict';

    // Pass the fileDirective to the app
    angular
        .module('y')
        .directive('fileDirective', fileDirective);


    // Define the fileDirective
    function fileDirective() {

        // Define directive
        var directive = {

                restrict: 'EA',
                templateUrl: 'app/shared/components/file-component/file-component.html',
                scope: {
                    fileString: '@',                      // Isolated scope string
                    fileAttribute: '=',                   // Isolated scope two-way data binding
                    fileAction: '&'                       // Isolated scope action
                },
                link: linkFunc,
                controller: fileDirectiveController,
                controllerAs: 'fileDirective'
        };

        // Return directive
        return directive;

        // Define link function
        function linkFunc(scope, el, attr, ctrl) {

            // Do stuff...
        }
    }

    // Define directive controller
    function fileDirectiveController() {

        // Do stuff...
    }

})();
