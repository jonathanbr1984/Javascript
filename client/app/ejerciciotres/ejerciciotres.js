'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciotres', {
                url: '/ejerciciotres',
                template: '<ejerciciotres></ejerciciotres>'
            });
    });