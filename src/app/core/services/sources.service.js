(function () {
    'use strict';

    angular.module('tooWatch.getSources', [])
        .factory('GetSources', GetSources)

    GetSources.$inject = ['$http'];

    function GetSources($http) {

        var sourceUrl = 'http://api.tanktop.tv/api/1/eyJzZXJ2aWNlX2lkIjo0N30%3A1ZtiXk%3AwTQs7xtIUcUczLLZs0OxmQysypo/source/';

        console.log(sourceUrl);
        //public api

        var services = {

            getChannels: getChannels
        }

        return services

        function getChannels() {

            //get channles

            return $http.get(sourceUrl);

        }
    }

})();
