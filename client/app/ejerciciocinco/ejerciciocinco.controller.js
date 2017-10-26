'use strict';

(function() {

    class EjercicioCincoController {

        constructor() {
            this.c;
            this.h;
            this.r;
            this.at;
            this.ac;
            this.pi = 3.1416;
            this.area2;
        }

        $onInit() {}
        rectangulo() {
            this.c = Math.sqrt(Math.pow(this.h, 2) - Math.pow(this.r, 2));
            this.at = 2 * (this.r * this.c) / 2;
            this.ac = (this.pi * this.r * this.r) / 2;
            this.area2 = this.at + this.ac;
        }
    }

    angular.module('javascriptApp')
        .component('ejerciciocinco', {
            templateUrl: 'app/ejerciciocinco/ejerciciocinco.html',
            controller: EjercicioCincoController,
            controllerAs: 'vm'
        });

})();