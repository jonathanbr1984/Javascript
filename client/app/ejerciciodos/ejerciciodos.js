'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciodos', {
                url: '/ejerciciodos',
                parent: 'menu',
                template: '<ejerciciodos></ejerciciodos>'
            });
    });