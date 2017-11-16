'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejercicioocho', {
                url: '/ejercicioocho',
                parent: 'menu',
                template: '<ejercicioocho></ejercicioocho>'
            });
    });