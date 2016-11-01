(function() {

  'use strict';

    // Pass the sidenavDirective to the app
    angular
        .module('y')
        .directive('sidenavDirective', sidenavDirective);


    // Define the sidenavDirective
    function sidenavDirective() {

        // Define directive
        var directive = {

                restrict: 'EA',
                templateUrl: 'app/shared/components/sidenav-component/sidenav-component.html',
                scope: {
                    navbarString: '@',                      // Isolated scope string
                    navbarAttribute: '=',                   // Isolated scope two-way data binding
                    navbarAction: '&'                       // Isolated scope action
                },
                link: linkFunc,
                controller: sidenavDirectiveController,
                controllerAs: 'sidenavDirective'
        };

        // Return directive
        return directive;

        // Define link function
        function linkFunc(scope, el, attr, ctrl) {

            // Do stuff...
        }
    }

    // Define directive controller
    function sidenavDirectiveController(userService, $state, $mdSidenav) {

		this.home = function(){
			var self = this;
        	self.guest = userService.isGuest;
        	self.role = userService.getRole();
			if(self.guest == false){
				if(self.role == "admin"){
					$state.go('biodynamics-home');
				}else{
                    $state.go('dynamics-home');
                }
			}else{
				$state.go('estatico-home');
			}
		}
		
        this.logout = function(){
            userService.logout()
        }
        this.fan = function(){
            $mdSidenav("fff").close();
        }
    }
})();
