'use strict';

describe('Component: MenuComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var MenuComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    MenuComponent = $componentController('menu', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
