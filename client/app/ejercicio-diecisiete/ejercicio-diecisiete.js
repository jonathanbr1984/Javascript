'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejercicio-diecisiete', {
                url: '/ejercicio-diecisiete',
                parent: 'menu',
                template: '<ejercicio-diecisiete></ejercicio-diecisiete>'
            });
    });