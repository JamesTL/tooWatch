(function () {
    'use strict';

    angular
        .module('tooWatch.movie', [])
        .factory('GetMovie', GetMovie)

    GetMovie.$inject = ['$http'];

    function GetMovie($http) {

        var sourceUrl = 'http://api.tanktop.tv/api/1/eyJzZXJ2aWNlX2lkIjo0N30%3A1ZtiXk%3AwTQs7xtIUcUczLLZs0OxmQysypo/movie/';

        var services = {

            getMovieDetails: getMovieDetails

        }

        return services;

        function getMovieDetails(movieID) {

            $http.get(sourceUrl + movieID)
                .success(function (data) {

                    return data;

                })
                .error(function () {

                    return 'Movie cannot be found';
                })

        }
    }
})();