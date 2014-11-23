(function () {
    "use strict";

    angular
        .module("thinkster.authentication.services")
        .factory("Authentication", Authentication);

    Authentication.$inject = ["$cookies", "$http"];

    function Authentication($cookies, $http){
        var Authentication = {
            register: register,
            login: login,
        };

        return Authentication;

        function register(email, password, username){
            return $http.post("/api/v1/accounts/",{
                username: username,
                password: password,
                email: email
            });
        }

        function login(email, password){
            return $http.post('/api/v1/auth/login/', {
                email: email, password: password
            }).then(loginSuccessFn, loginErrorFn);
        }

    }

})();