(function() {
  'use strict';

  angular
    .module('tooWatch')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
