'use strict';

(function() {

    class EjercicioOnceController {

        constructor() {
          this.A;
          this.B;
          this.C;
          this.M;
          this.maximo;
          this.letra;
        }

        $onInit() {}
        calcular() {
          if(this.A > this.B){
            this.M = this.A;
            this.letra = "A";
          } else {
            this.M = this.B;
            this.letra = "B";
          }
          if(this.M > this.C){
              this.maximo = this.M;
              this.letra = "M";
          } else {
            this.maximo = this.C;
            this.letra = "C";
          }
        }
}
    angular.module('javascriptApp')
        .component('ejercicioonce', {
            templateUrl: 'app/ejercicioonce/ejercicioonce.html',
            controller: EjercicioOnceController,
            controllerAs: 'vm'
        });

})();
