(function () {
    'use strict';

    angular
        .module('tooWatch')
        .controller('SourceListController', SourceListController)
        .directive('twSourceList', twSourceList);

    SourceListController.$inject = ['GetSources']

    function SourceListController(GetSources) {

        var vm = this;
        vm.channelList = [];
        vm.selectedSourceID = 0;

        GetSources.getChannels()
            .success(function (data) {

                vm.channelList = data.sources;

            });

    }

    twSourceList.$inject = []

    function twSourceList() {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/sourcesList/sourceList.template.html',
            scope: {},
            controller: 'SourceListController',
            controllerAs: 'vm',
            bindToController: true,
            link: link
        }

        return directive
        function link() {




        }
    }

})();
