'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejercicio-quince', {
                url: '/ejercicio-quince',
                parent: 'menu',
                template: '<ejercicio-quince></ejercicio-quince>'
            });
    });