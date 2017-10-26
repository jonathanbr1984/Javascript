'use strict';

(function() {

    class EjercicioOchoController {

        constructor() {
          this.L;
          this.N;
          this.A;
          this.CM;
        }

        $onInit() {}
        calcular() {
          this.V = this.L * this.N * this.A;
          this.PAG = this.V * this.CM;
        }

    }

    angular.module('javascriptApp')
        .component('ejercicioocho', {
            templateUrl: 'app/ejercicioocho/ejercicioocho.html',
            controller: EjercicioOchoController,
            controllerAs: 'vm'
        });

})();
