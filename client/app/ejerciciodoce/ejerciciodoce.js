'use strict';
angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciodoce', {
                url: '/ejerciciodoce',
                parent: 'menu',
                template: '<ejerciciodoce></ejerciciodoce>'
            });
    });