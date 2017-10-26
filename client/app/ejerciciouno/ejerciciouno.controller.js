'use strict';

(function() {

    class EjercicioUnoController {

        constructor() {
            this.c1;
            this.c2;
            this.c3;
            this.c4;
            this.p;
            this.s;
        }

        $onInit() {}
        calcular() {
            console.log("calificaciones");
            this.s = this.c1 + this.c2 + this.c3 + this.c4;
            this.p = this.s / 4;
        }
    }

    angular.module('javascriptApp')
        .component('ejerciciouno', {
            templateUrl: 'app/ejerciciouno/ejerciciouno.html',
            controller: EjercicioUnoController,
            controllerAs: 'vm'
        });

})();