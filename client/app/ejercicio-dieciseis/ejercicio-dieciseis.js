'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejercicio-dieciseis', {
                url: '/ejercicio-dieciseis',
                parent: 'menu',
                template: '<ejercicio-dieciseis></ejercicio-dieciseis>'
            });
    });