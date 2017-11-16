'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejercicioseis', {
                url: '/ejercicioseis',
                parent: 'menu',
                template: '<ejercicioseis></ejercicioseis>'
            });
    });