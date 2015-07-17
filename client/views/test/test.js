'use strict';

angular.module('cdkNgfullstackDemo')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/test/:blah', {
        templateUrl: 'views/test/test.html',
        controller: 'TestCtrl',
        controllerAs: 'vm'
      });
  });
