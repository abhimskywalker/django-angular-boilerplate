(function () {
    "use strict";

    angular
        .module("thinkster.authentication.services")
        .factory("Authentication", Authentication);

    Authentication.$inject = ["$cookies", "$http"];

    function Authentication($cookies, $http){
        var Authentication = {
            register: register
        };

        return Authentication;

        function register(username, password, email){
            return $http.post("/api/v1/accounts/",{
                username: username,
                password: password,
                email: email
            });
        }
    }

})();