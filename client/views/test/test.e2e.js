'use strict';

describe('test route', function () {

  beforeEach(function () {
    browser.get('/test');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('TestCtrl');
  });

});
