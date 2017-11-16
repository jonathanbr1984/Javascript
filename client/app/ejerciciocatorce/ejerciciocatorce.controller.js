'use strict';

(function() {

    class EjercicioCatorceController {

        constructor() {
            this.ti;
            this.km;
            this.npr;
            this.ck;
            this.np;
            this.cp;
            this.to;
        }

        $onInit() {}
        calcular() {
            if (this.ti = 'A') {
                this.ck = 2.0;
            } else if (this.ti = 'B') {
                this.ck = 2.5;
            } else if (this.ti = 'C') {
                this.ck = 3.0;
            }
            if (this.npr < 20) {
                this.np = 20;
                this.to = this.ck * this.np * this.km;
                this.cp = this.to / this.npr;
            } else {
                this.np = this.npr;
                this.to = this.ck * this.npr * this.km;
                this.cp = this.to / this.npr;
            }

        }
    }

    angular.module('javascriptApp')
        .component('ejerciciocatorce', {
            templateUrl: 'app/ejerciciocatorce/ejerciciocatorce.html',
            controller: EjercicioCatorceController,
            controllerAs: 'vm'
        });

})();