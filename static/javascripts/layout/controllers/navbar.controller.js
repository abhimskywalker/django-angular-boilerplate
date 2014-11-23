(function(){
    'use strict';

    angular
        .module('thinkster.layout.controllers')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', 'Authentication'];

    function NavbarController($scope, Authentication){
        var vm = this;

        $scope.vm = vm;

        vm.logout = logout;

        function logout(){
            Authentication.logout();
        }
    }
})();