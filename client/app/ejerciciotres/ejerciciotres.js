'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciotres', {
                url: '/ejerciciotres',
                parent: 'menu',
                template: '<ejerciciotres></ejerciciotres>'
            });
    });