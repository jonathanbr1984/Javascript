'use strict';

(function() {

    class EjercicioQuinceComponent {
        constructor() {
            this.ti;
            this.n;
            this.tp;
            this.pa;
            this.ca;
            this.to;
            this.tot;
        }
        calcular() {
            if (this.ti == 'sencilla') {
                this.pa = 2000;
                if (this.tp == 'credito') {
                    this.tot = this.pa * 0.95 * this.n;
                } else {
                    if (this.tp != 'credito') {
                        this.to = this.pa * this.n;
                    }
                }
            }
            if (this.ti == 'doble') {
                this.pa = 2500;
                if (this.tp == 'credito') {
                    this.tot = this.pa * 0.95 * this.n;
                } else {
                    if (this.tp != 'credito') {
                        this.to = this.pa * this.n;
                    }
                }
            }
            if (this.ti == 'triple') {
                this.pa = 2800;
                if (this.tp == 'credito') {
                    this.tot = this.pa * 0.95 * this.n;
                } else {
                    if (this.tp != 'credito') {
                        this.to = this.pa * this.n;
                    }
                }
            }
        }
    }

    angular.module('javascriptApp')
        .component('ejercicioQuince', {
            templateUrl: 'app/ejercicio-quince/ejercicio-quince.html',
            controller: EjercicioQuinceComponent,
            controllerAs: 'vm'
        });

})();