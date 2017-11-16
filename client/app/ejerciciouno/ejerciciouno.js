'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciouno', {
                url: '/ejerciciouno',
                parent: 'menu',
                template: '<ejerciciouno></ejerciciouno>'
            });
    });