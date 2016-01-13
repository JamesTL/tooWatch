(function () {
    'use strict';

    angular
        .module('tooWatch')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main',
                views: {
                    'page-header': {templateUrl: 'app/main/main.html'}
                }
            })
            .state('sources', {
                url: '/sources',
                views: {
                    'page-header': {templateUrl: 'app/components/sourcesList/sourceListHeader.html'},
                    'left-content': {templateUrl: 'app/components/sourcesList/sourceList.html'}
                }
            });

        $urlRouterProvider.otherwise('/');
    }

})();
