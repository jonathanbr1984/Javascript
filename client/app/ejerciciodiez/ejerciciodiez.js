'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciodiez', {
                url: '/ejerciciodiez',
                parent: 'menu',
                template: '<ejerciciodiez></ejerciciodiez>'
            });
    });