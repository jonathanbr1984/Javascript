'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciotrece', {
                url: '/ejerciciotrece',
                template: '<ejerciciotrece></ejerciciotrece>'
            });
    });