'use strict';

(function() {

    class EjercicioTreceController {

        constructor() {
            this.ti;
            this.di;
            this.tu;
            this.pag;
            this.imp;
            this.tot;
        }

        $onInit() {}
        calcular() {
            if (this.ti <= 5) {
                this.pag = this.ti * 100;
            } else if (this.ti <= 3) {
                this.pag = this.ti * 80;
            } else if (this.ti <= 2) {
                this.pag = this.ti * 70;
            } else if (this.ti <= 10) {
                this.pag = this.ti * 50;
            }
            if (this.di = "domingo") {
                this.imp = this.pag * 0.03;
            } else if (this.di = "habil") {
                if (this.tu = "matutino") {
                    this.imp = this.pag * 0.15;
                }
                if (this.tu = "vespertino") {
                    this.imp = this.pag * 0.10;
                }
            }
            this.tot = this.pag + this.imp;
        }
    }

    angular.module('javascriptApp')
        .component('ejerciciotrece', {
            templateUrl: 'app/ejerciciotrece/ejerciciotrece.html',
            controller: EjercicioTreceController,
            controllerAs: 'vm'
        });

})();