'use strict';

describe('Component: EjercicioDiecisieteComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var EjercicioDiecisieteComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EjercicioDiecisieteComponent = $componentController('ejercicio-diecisiete', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
