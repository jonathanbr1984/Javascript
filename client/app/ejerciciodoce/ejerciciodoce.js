'use strict';
angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciodoce', {
                url: '/ejerciciodoce',
                template: '<ejerciciodoce></ejerciciodoce>'
            });
    });