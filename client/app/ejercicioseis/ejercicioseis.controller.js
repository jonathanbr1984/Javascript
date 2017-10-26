'use strict';

(function() {

    class EjercicioSeisController {

        constructor() {
            this.x2;
            this.x1;
            this.y2;
            this.y1;
            this.h;
        }

        $onInit() {}
        calcular() {
            this.x = this.x2 - this.x1;
            this.y = this.y2 - this.y1;
            this.h = Math.sqrt(Math.pow((this.x), 2) + Math.pow((this.y), 2));
        }

    }

    angular.module('javascriptApp')
        .component('ejercicioseis', {
            templateUrl: 'app/ejercicioseis/ejercicioseis.html',
            controller: EjercicioSeisController,
            controllerAs: 'vm'
        });

})();