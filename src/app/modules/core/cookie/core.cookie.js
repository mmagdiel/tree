(function(){
	"use strict";

	var app = angular.module("core.cookie");

	app.config(["$cookiesProvider", function($cookie){
		/*
		 * Set cookies to expire in 1 month
		 */
		
		// define current date
		var current = new Date();

		// define 1 month later date
		var later = new Date(new Date(current).setMonth(current.getMonth() + 1));

		// Set cookie expiration
		$cookie.expires = later;
	}]);
})();