'use strict';

(function() {

    class EjercicioUnoController {

        constructor() {}

        $onInit() {}
        calcular() {
            this.s = this.c1 + this.c2 + this.c3 + this.c4;
            this.p = this.p / 2;
        }
    }

    angular.module('javascriptApp')
        .component('ejerciciouno', {
            templateUrl: 'app/ejerciciouno/ejerciciouno.html',
            controller: EjercicioUnoController,
            controllerAs: 'vm'
        });

})();