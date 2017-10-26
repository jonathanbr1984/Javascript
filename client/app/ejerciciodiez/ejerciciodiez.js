'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciodiez', {
                url: '/ejerciciodiez',
                template: '<ejerciciodiez></ejerciciodiez>'
            });
    });
