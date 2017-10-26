'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejercicionueve', {
                url: '/ejercicionueve',
                template: '<ejercicionueve></ejercicionueve>'
            });
    });
