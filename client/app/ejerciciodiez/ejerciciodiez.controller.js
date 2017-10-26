'use strict';

(function() {

    class EjercicioDiezController {

        constructor() {
          this.precio;
          this.descuento;
        }

        $onInit() {}
        calcular() {
          if(this.precio >= 2500){
              this.descuento = this.precio - 0.15;
          }
          else {
            this.descuento = this.precio - 0.08;
          }
        }
      }

    angular.module('javascriptApp')
        .component('ejerciciodiez', {
            templateUrl: 'app/ejerciciodiez/ejerciciodiez.html',
            controller: EjercicioDiezController,
            controllerAs: 'vm'
        });

})();
