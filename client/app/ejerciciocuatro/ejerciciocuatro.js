'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciocuatro', {
                url: '/ejerciciocuatro',
                parent: 'menu',
                template: '<ejerciciocuatro></ejerciciocuatro>'
            });
    });