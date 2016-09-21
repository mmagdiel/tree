(function(){
	'use strict';

	// Pass the configuration theming to the app
	var app = angular
            .module('core.rest');
      // Define global domain for resource
      app.config(["ngRestful", function($restful){
        $restful.setDomain("http://192.168.1.106/tree/server");
      }]);
})();