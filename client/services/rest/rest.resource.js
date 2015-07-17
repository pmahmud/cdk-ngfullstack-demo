'use strict';

angular.module('cdkNgfullstackDemo')
  .factory('Rest', function ($resource) {
    return $resource('/api/rests/:id', { id: '@_id' }, {
      update: {
        method: 'PUT'
      }
    });
  });
