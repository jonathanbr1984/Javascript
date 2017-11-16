'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menu', {
        url: '/menu',
        template: '<menu></menu>'
      });
  });
