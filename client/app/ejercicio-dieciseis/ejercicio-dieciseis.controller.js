'use strict';

(function() {

    class EjercicioDieciseisComponent {
        constructor() {
            this.nc;
            this.cc;
            this.tot;
        }
        calcular() {

        }
    }

    angular.module('javascriptApp')
        .component('ejercicioDieciseis', {
            templateUrl: 'app/ejercicio-dieciseis/ejercicio-dieciseis.html',
            controller: EjercicioDieciseisComponent,
            controllerAs: 'ejercicioDieciseisCtrl'
        });

})();