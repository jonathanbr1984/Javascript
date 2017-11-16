'use strict';

(function(){

class MenuComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('javascriptApp')
  .component('menu', {
    templateUrl: 'app/menu/menu/menu.html',
    controller: MenuComponent,
    controllerAs: 'menuCtrl'
  });

})();
