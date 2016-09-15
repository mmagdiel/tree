(function() {

  'use strict';

    // Pass the treeDirective to the app
    angular
        .module('y')
        .directive('treeDirective', treeDirective);


    // Define the treeDirective
    function treeDirective() {

        // Define directive
        var directive = {
            restrict: 'E',
            template: '<div id="cy" style="height:100px; width:100px;"></div>',
            scope: {
                nodes: '=',
                relations: '='
            },
            controller: treeDirectiveController
        };

        // Return directive
        return directive;
    }

    // Define directive controller
    function treeDirectiveController($scope) {
        var container = angular.element(document.querySelector("#cy"));

        cytoscape({
            container: container,
            elements: $scope.nodes.concat($scope.relations),
            layout: {
                name: "breadthfirst",
                directed: true,
                padding: 30,
                avoidOverlap: true
            },
            style: [
            {
                selector: "node",
                style: {
                    shape: "circle",
                    "background-color": "red",
                    label: "data(name)"
                }
            }]
        });
    }
})();
