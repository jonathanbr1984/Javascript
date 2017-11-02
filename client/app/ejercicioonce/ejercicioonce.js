'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejercicioonce', {
                url: '/ejercicioonce',
                template: '<ejercicioonce></ejercicioonce>'
            });
    });
