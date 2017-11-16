'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciotrece', {
                url: '/ejerciciotrece',
                parent: 'menu',
                template: '<ejerciciotrece></ejerciciotrece>'
            });
    });