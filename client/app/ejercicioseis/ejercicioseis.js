'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejercicioseis', {
                url: '/ejercicioseis',
                template: '<ejercicioseis></ejercicioseis>'
            });
    });