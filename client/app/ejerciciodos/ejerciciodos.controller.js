'use strict';

(function() {

    class EjercicioDosController {

        constructor() {}

        $onInit() {}
        calcular() {
            this.area = this.a * this.b;
        }
    }

    angular.module('javascriptApp')
        .component('ejerciciodos', {
            templateUrl: 'app/ejerciciodos/ejerciciodos.html',
            controller: EjercicioDosController,
            controllerAs: 'vm'
        });

})();