(function() {

  'use strict';

    // Pass the userService to the app
    angular
        .module('y')
        .factory('userService', userService);


    // Define the userService
    function userService($resource, $rootScope, $cookies) {


        // Inject with ng-annotate
        "ngInject";

        // Define the user factory object to return
        var userService = {
            $user: {
                id: null,
                username: null,
                access_token: null,
                role: null
            },
            isGuest: true,
            init: init,
            login: login,
            getId: getId,
            getToken: getToken,
            getName: getName,
            getRole: getRole,
            cookieLogin: cookieLogin
        };

        // Return the user factory
        return userService;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the userService
        |
        */


        // Display a listing of user.
        function init() {
            console.log('Init user factory');
        }

        // Logins a current user
        function login(data, cb = null){
            var login = new $resource("login");

            var success = false;

            login.save(null, data)
                .then(function(response){
                    var objectType = Object.prototype.toString.call(response.data);

                    // Server returns array if login is failed, and returns object if login is successful
                    if(response.status == 200 && objectType == "[object Object]")
                    {
                        userService.$user = response.data;
                        userService.isGuest = false;
                        success = true;

                        if(data.cookie){
                            storeCookie("access_token", response.data.data.access_token);
                        }

                        $rootScope.$broadcast("user.login", success, userService.$user);
                    }

                    cb(null, success);
                })
                .catch(function(err){
                    cb(err, false);
                });
        }

        // Gets the id of the current logged user
        function getId(){
            return userService.$user.id;
        }

        // Gets the access_token of the current logged user
        function getToken(){
            return userService.$user.access_token;
        }

        // Gets the username of the current logged user
        function getName(){
            return userService.$user.username;
        }

        // Gets the username of the current logged user
        function getRole(){
            return userService.$user.role;
        }

        // Store a cookie value
        function storeCookie(key, value){
            $cookies.put(key, value);
        }

        // Try to login through cookie if defined
        function cookieLogin(cb){
            if($cookies.get("access_token")){
                var login = new $resource("login");

                var data = {
                    access_token: $cookies.get("access_token")
                }

                var success = false;

                login.save(null, data)
                    .then(function(response){
                        if(response.status == 200 && response.data.passed)
                        {
                            userService.$user = response.data.data;
                            userService.isGuest = false;
                            success = true;

                            $rootScope.$broadcast("user.login", success, userService.$user);
                        }

                        if(cb){
                            cb(null, success, userService.$user);
                        }
                    })
                    .catch(function(err){
                        console.error(err);
                    })

            }
            else{
                cb(null, false, null);
            }
        }
    }
})();
