'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciocinco', {
                url: '/ejerciciocinco',
                parent: 'menu',
                template: '<ejerciciocinco></ejerciciocinco>'
            });
    });