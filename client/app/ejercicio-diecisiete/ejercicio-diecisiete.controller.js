'use strict';

(function() {

    class EjercicioDiecisieteComponent {
        constructor() {
            this.c;
            this.mp;
            this.mo;
            this.gf;
            this.cp;
            this.pv;
        }
        calcular() {
            if ((this.c == 3) || this.c == 4) {
                this.mo = this.mp * 0.75;
            } else {
                if ((this.c == 1) && (this.c == 5)) {
                    this.mo = this.mp * 0.80;
                } else {
                    this.mo = this.mp * 0.85;
                }
            }
            if ((this.c == 2) || (this.c == 5)) {
                this.gf = this.mp * 0.30;
            } else {
                if ((this.c == 3) || (this.c = 6)) {
                    this.gf = this.mp * 0.35;
                } else {
                    this.gf = this.mp * 0.28;
                }
            }
            this.cp = this.mp + this.mo + this.gf;
            this.pv = this.cp + (this.cp - 0.45);
        }
    }

    angular.module('javascriptApp')
        .component('ejercicioDiecisiete', {
            templateUrl: 'app/ejercicio-diecisiete/ejercicio-diecisiete.html',
            controller: EjercicioDiecisieteComponent,
            controllerAs: 'vm'
        });

})();