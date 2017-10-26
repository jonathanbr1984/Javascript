'use strict';

(function() {

    class EjercicioTresController {

        constructor() {
            this.r;
            this.area;
            this.pi = 3.1416;
        }

        $onInit() {}
        calcular() {
            this.area = (this.r * this.r) * this.pi;
        }
    }

    angular.module('javascriptApp')
        .component('ejerciciotres', {
            templateUrl: 'app/ejerciciotres/ejerciciotres.html',
            controller: EjercicioTresController,
            controllerAs: 'vm'
        });

})();