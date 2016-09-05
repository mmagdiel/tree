(function(){

	'use strict';

	// Pass the configuration theming to the app
	var app = angular
            .module('core.rest');
      // Define global domain for resource
      app.config(["ngRestful", function($restful){
        $restful.setDomain("http://localhost/tree/server/");
      }]);

      app.controller("exampleController", ["$resource", function($resource){
      //  Domain is already defined, accounts will be appended with the domain url
      
      var resource = new $resource("accounts");

      // Fetch can accept optional parameter to where it will perform a request from accounts
        resource.fetch()
          .then(function(response){
            // successful respone
          })
          .catch(function(err){
            // Error on request
          });
      }]); 
})();