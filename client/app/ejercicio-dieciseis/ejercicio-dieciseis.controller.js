'use strict';

(function() {

    class EjercicioDieciseisComponent {
        constructor() {
            this.nc;
            this.cc;
            this.tot;
        }
        calcular() {
            if (this.nc <= 3) {
                this.cc = 20000;
                if (this.nc <= 2) {
                    this.cc = 15000;
                    if (this.nc == 3) {
                        this.cc = 10000;
                    }
                    this.tot = this.cc * this.nc;
                }
                this.tot = this.cc * this.nc;
            }
            this.tot = this.cc * this.nc;
        }
    }
    angular.module('javascriptApp')
        .component('ejercicioDieciseis', {
            templateUrl: 'app/ejercicio-dieciseis/ejercicio-dieciseis.html',
            controller: EjercicioDieciseisComponent,
            controllerAs: 'vm'
        });

})();