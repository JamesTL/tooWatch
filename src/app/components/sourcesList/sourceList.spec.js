(function () {
    'use strict';

    describe('SourceListController', function () {

        beforeEach(module('tooWatch'));

        it('should contain an list of service id to  survey', inject(function ($controller) {

            var vm = $controller('SourceListController');
            expect(angular.isArray(vm.channelList)).toBeTruthy();

        }));

    });

})();