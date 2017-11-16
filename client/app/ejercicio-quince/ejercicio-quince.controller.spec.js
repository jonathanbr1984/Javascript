'use strict';

describe('Component: EjercicioQuinceComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var EjercicioQuinceComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EjercicioQuinceComponent = $componentController('ejercicio-quince', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
