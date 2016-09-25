(function(){
	'use strict';

	// Define angular app module
	angular.module('y', [
		'core.rest',
		'core.routing',
		'core.theming',
		'core.validator',
		'core.cookie',
		'ngMaterial',
		'ui.router'
	])
	.controller("mainController", ["$scope", "$state", "userService", "$location", function($scope, $state, $user, $location){
		if(!$user.hasCookie()){
			console.trace();
			$location.path($state.href("/"));
		}

		$scope.$on("user.logout", function(){
			$state.go("estatico-home");
		});
	}])
})();
