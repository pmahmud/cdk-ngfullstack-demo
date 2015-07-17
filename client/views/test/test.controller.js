'use strict';

angular.module('cdkNgfullstackDemo')
  .controller('TestCtrl', function ($routeParams,$log) {

    var vm = this;
    angular.extend(vm, {
      name: 'TestCtrl',
      params: $routeParams.blah

    });

  });
