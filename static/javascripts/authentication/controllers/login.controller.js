(function(){
    "use strict";

    angular
        .module("thinkster.authentication.controllers")
        .controller("LoginController", LoginController);

    LoginController.$inject = ["$location", "$scope", "Authentication"];

    function LoginController($location, $scope, Authentication){
        var vm = this;

        vm.login = login;

        activate();

        function activate(){
            if (Authentication.isAuthenticated()){
                $location.url("/");
            }
        }

        function login(){
            Authentication.login(vm.email, vm.password)
                .then(loginError);
        }

        function loginError(data){
            if (data){
                vm.error = data.data.error;
            }
        }
    }
})();