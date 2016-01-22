(function () {
    'use strict';

    angular.module('tooWatch.getMovies', [])
        .factory('GetMovies', GetMovies);

    GetMovies.$inject = ['$http', 'GetMovie'];

    function GetMovies($http, GetMovie) {

        var sourceUrl = 'http://api.tanktop.tv/api/1/eyJzZXJ2aWNlX2lkIjo0N30:1ZtiXk:wTQs7xtIUcUczLLZs0OxmQysypo/list/_/movie/?source_id=',
            sourceMovieIDList = [],
            movieDetailsList;

        var services = {

            getSourceMoviesID: getSourceMoviesID,
            getMovieListDetails: getMovieListDetails

        }

        return services;

        function getSourceMoviesID(sourceID) {

            $http.get(sourceUrl + sourceID)
                .success(function (data) {

                    sourceMovieIDList = data;
                });
        }

        function getMovieListDetails() {

            movieDetailsList = angular.forEach(sourceMovieIDList, function (value) {

                GetMovie.getMovieDetails(value);

            })
        }
    }

})();