'use strict';

describe('Component: EjercicioDieciseisComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var EjercicioDieciseisComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EjercicioDieciseisComponent = $componentController('ejercicio-dieciseis', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
