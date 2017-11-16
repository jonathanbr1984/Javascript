'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciosiete', {
                url: '/ejerciciosiete',
                parent: 'menu',
                template: '<ejerciciosiete></ejerciciosiete>'
            });
    });