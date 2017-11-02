'use strict';

(function() {

    class EjercicioDoceController {

        constructor() {
            this.np;
            this.tot;
        }

        $onInit() {}

        calcular() {
            if ((this.np >= 200) && (this.np <= 300)) {
                this.tot = this.np * 85.00;
            }
            if (this.np >= 301) {
                this.tot = this.np * 75.00;
            } else {
                this.tot = this.np * 95.00;
            }
            this.tot = this.np * 95.00;
        }
    }

    angular.module('javascriptApp')
        .component('ejerciciodoce', {
            templateUrl: 'app/ejerciciodoce/ejerciciodoce.html',
            controller: EjercicioDoceController,
            controllerAs: 'vm'
        });

})();