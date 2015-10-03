/**
 * Created by Rumman Khan on 10/2/2015.
 */

var touristlistControllers = angular.module('touristlistControllers', []);

touristlistControllers.controller('PlaceListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('assets/json/places.json').success(function(data) {
            $scope.places = data;
        });

        $scope.order='popular'
    }]);

touristlistControllers.controller('PlaceDetailCtrl',['$scope','$http','$routeParams',
function($scope,$http,$routeParams){
$http.get('assets/json/'+$routeParams.placeId+'.json').success(function(option){
    $scope.place=option;
    console.log($scope.place);
});
}
]);
