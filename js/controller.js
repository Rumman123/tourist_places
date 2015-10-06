/**
 * Created by Rumman Khan on 10/2/2015.
 */

var touristlistControllers = angular.module('touristlistControllers', []);

touristlistControllers.controller('PlaceListCtrl', ['$scope', 'Place',
    function ($scope,Place) {
            $scope.places = Place.query();
            $scope.order='popular'
    }]);

touristlistControllers.controller('PlaceDetailCtrl',['$scope','Place','$routeParams',
function($scope,Place,$routeParams){
    $scope.place = Place.get({placeId: $routeParams.placeId});

}
]);
touristlistControllers.controller('CarouselDemoCtrl',['$scope','Place','$routeParams',
    function($scope,Place,$routeParams){
        $scope.myInterval = 2000;
        $scope.images = Place.get({placeId: $routeParams.placeId});

    }
]);
touristlistControllers.controller('AboutCtrl',[
    function(){
    }
]);
touristlistControllers.controller('ContactCtrl',[
    function(){
    }
]);
