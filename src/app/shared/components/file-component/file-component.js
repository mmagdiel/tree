(function() {
  'use strict';

	// Pass the fileDirective to the app
	angular
		.module('y')
		.directive('fileModel', fileDirective);

	// Define the fileDirective
	function fileDirective(){
		// Define directive
		var directive = {
			restrict: 'A',
			scope: {
				fileModel: '=',
			},
			link: linkFunc
		};

		// Return directive
		return directive;

		function linkFunc(scope, el){
			el.bind("change", function(){
				scope.$apply(function(){
					scope.fileModel = el[0].files[0];
				});
			});
		}
	}
})();
