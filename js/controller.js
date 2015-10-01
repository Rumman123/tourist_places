/**
 * Created by Rumman Khan on 10/2/2015.
 */

var touristplacesApp=angular.module('toristplacesApp',[]);

touristplacesApp.controller('TouristListCtrl',function($scope,$http){
$http.get('assets/json/places.json').success(function(data){
    $scope.places=data;
});
    $scope.order='popular'
});
