'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('PopularCtrl', function ($scope, serviceAjax) {
        $scope.currentPage = 1;
        $scope.totalPages = 0;

        $scope.loadMovies = function(){
            serviceAjax.popular($scope.currentPage).success(function(data){
                $scope.movies = data.results;
                $scope.totalPages = data.total_pages;
            });
        };

        $scope.pageChanged = function(){
            $scope.loadMovies();
        };
        $scope.loadMovies();
  });
