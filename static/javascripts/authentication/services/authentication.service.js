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
            setAuthenticatedAccount: setAuthenticatedAccount,
            getAuthenticatedAccount: getAuthenticatedAccount,
            isAuthenticated: isAuthenticated,
            unauthenticate: unauthenticate
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

        function loginSuccessFn(data, status, headers, config){
            Authentication.setAuthenticatedAccount(data.data);

            window.location = "/";
        }

        function loginErrorFn(data, status, headers, config){
            console.log('Login Failure!');
            return data;
        }

        function setAuthenticatedAccount(account){
            $cookies.authenticatedAccount = JSON.stringify(account);
        }

        function getAuthenticatedAccount(){
            if (!$cookies.authenticatedAccount){
                return;
            }
            return JSON.parse($cookies.authenticatedAccount);
        }

        function isAuthenticated(){
            return !!$cookies.authenticatedAccount;
        }

        function unauthenticate(){
            delete $cookies.authenticatedAccount;
        }
    }

})();