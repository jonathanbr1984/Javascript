'use strict';

(function() {

    class EjercicioSeisController {

        constructor() {}

        $onInit() {}

    }

    angular.module('javascriptApp')
        .component('ejercicioseis', {
            templateUrl: 'app/ejercicioseis/ejercicioseis.html',
            controller: EjercicioSeisController,
            controllerAs: 'vm'
        });

})();