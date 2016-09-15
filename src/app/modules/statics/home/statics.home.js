(function() {
  'use strict';

    // Pass the staticsHomeCtrl to the app
    angular
        .module('y')
        .controller('staticsHomeCtrl', staticsHomeCtrl);

    // Define the staticsHomeCtrl
    function staticsHomeCtrl() {

        // Inject with ng-annotate
        "ngInject";

        // Define staticsHome as this for ControllerAs and auto-$scope
        var staticsHome = this;
            staticsHome.title =    "Tree app";

            staticsHome.nodes = [
                {data: {id: "a", name:"1"}},
                {data: {id: "b", name:"2"}},
                {data: {id: "c", name:"3"}},
                {data: {id: "d", name:"4"}},
                {data: {id: "e", name:"5"}},
                {data: {id: "f", name:"6"}},
                {data: {id: "g", name:"7"}}
            ];

            staticsHome.relations = [
                {
                    data: {
                        source: "a",
                        target: "b"
                    }
                },{
                    data: {
                        source: "a",
                        target: "c"
                    }
                },{
                    data: {
                        source: "b",
                        target: "d"
                    }
                },{
                    data: {
                        source: "b",
                        target: "e"
                    }
                },{
                    data: {
                        source: "c",
                        target: "f"
                    }
                },{
                    data: {
                        source: "c",
                        target: "g"
                    }
                }
            ];
    }
})();
