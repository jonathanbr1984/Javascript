'use strict';

(function() {

    class EjercicioCuatroController {

        constructor() {
            this.A;
            this.B;
            this.C;
            this.areaTriangulo;
            this.areaRectangulo;
            this.area
        }

        $onInit() {}
        obtenerArea() {
            this.areaTriangulo = this.B + (this.A - this.C) / 2;
            this.areaRectangulo = this.B * this.C;
            this.area = this.areaTriangulo + this.areaRectangulo;

        }
    }

    angular.module('javascriptApp')
        .component('ejerciciocuatro', {
            templateUrl: 'app/ejerciciocuatro/ejerciciocuatro.html',
            controller: EjercicioCuatroController,
            controllerAs: 'vm'
        });

})();