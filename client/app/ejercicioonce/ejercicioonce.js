'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejercicioonce', {
                url: '/ejercicioonce',
                parent: 'menu',
                template: '<ejercicioonce></ejercicioonce>'
            });
    });