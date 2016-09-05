(function(){

	'use strict';

	// Pass the configuration theming to the app
	var app = angular
            .module('core.theming');
    app.config(['$mdThemingProvider', function($mdThemingProvider){
       $mdThemingProvider.theme('default')
         .primaryPalette('light-blue',{
            'default':'400'
       })
         .accentPalette('green',{
            'default':'600' 
       })
         .warnPalette('red',{
            'default':'500'
       });
    }]);
   
    // Define the routerHelperProvider
	

})();
