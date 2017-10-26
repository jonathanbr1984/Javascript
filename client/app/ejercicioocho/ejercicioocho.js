'use strict';

angular.module('javascriptApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('ejercicioocho', {
                url: '/ejercicioocho',
                template: '<ejercicioocho></ejercicioocho>'
            });
    });
