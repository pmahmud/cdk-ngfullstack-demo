'use strict';

describe('Controller: TestCtrl', function () {

  beforeEach(module('cdkNgfullstackDemo'));

  var TestCtrl;

  beforeEach(inject(function ($controller) {
    TestCtrl = $controller('TestCtrl', {});
  }));

  it('should ...', function () {
    expect(1).toBe(1);
  });

});
