'use strict';

(function() {

    class EjercicioDosController {

        constructor() {
            this.a;
            this.b;
            this.area;
        }

        $onInit() {}
        calcular() {
            this.area = this.b * this.a;
        }
    }

    angular.module('javascriptApp')
        .component('ejerciciodos', {
            templateUrl: 'app/ejerciciodos/ejerciciodos.html',
            controller: EjercicioDosController,
            controllerAs: 'vm'
        });

})();