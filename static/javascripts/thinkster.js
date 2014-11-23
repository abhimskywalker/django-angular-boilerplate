(function (){
    'use strict';

    angular
        .module('thinkster', [
            'thinkster.config',
            'thinkster.routes',
            'thinkster.authentication'
        ]);

    agular
        .module('thinkster.config', []);

    angular
        .module('thinkster.routes', ['ngRoute']);
})();