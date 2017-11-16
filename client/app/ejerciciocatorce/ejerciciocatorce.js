'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciocatorce', {
                url: '/ejerciciocatorce',
                parent: 'menu',
                template: '<ejerciciocatorce></ejerciciocatorce>'
            });
    });