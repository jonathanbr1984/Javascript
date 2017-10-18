'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejerciciodos', {
                url: '/ejerciciodos',
                template: '<ejerciciodos></ejerciciodos>'
            });
    });