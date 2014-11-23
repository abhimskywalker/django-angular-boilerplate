(function (){
    'use strict';

    angular
        .module('thinkster', [
            'thinkster.config',
            'thinkster.routes',
            'thinkster.authentication'
        ])
        .run(run);

    angular
        .module('thinkster.config', []);

    angular
        .module('thinkster.routes', ['ngRoute']);

    run.$inject = ['$http'];

    function run($http){
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();