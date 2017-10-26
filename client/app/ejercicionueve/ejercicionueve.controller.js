'use strict';

(function() {

    class EjercicioNueveController {

        constructor() {
          this.NUM;
          this.R;
        }

        $onInit() {}
        calcular() {
          if(this.NUM > 0){
            console.log("Si",this.NUM);
            this.R = "El numero es positivo";
          }
          else {
            console.log("NO",this.NUM);
            this.R = "El numero es negativo";
          }
        }
    }

    angular.module('javascriptApp')
        .component('ejercicionueve', {
            templateUrl: 'app/ejercicionueve/ejercicionueve.html',
            controller: EjercicioNueveController,
            controllerAs: 'vm'
        });

})();
