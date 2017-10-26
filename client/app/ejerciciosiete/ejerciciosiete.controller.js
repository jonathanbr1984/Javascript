'use strict';

(function() {

    class EjercicioSieteController {

        constructor() {
            this.ht;
            this.ph;
        }

        $onInit() {}
        calcular() {
            this.ss = this.ht * this.ph;
        }

    }

    angular.module('javascriptApp')
        .component('ejerciciosiete', {
            templateUrl: 'app/ejerciciosiete/ejerciciosiete.html',
            controller: EjercicioSieteController,
            controllerAs: 'vm'
        });

})();