/**
 * Created by Rumman Khan on 10/2/2015.
 */

var IndiAwesomeControllers = angular.module('IndiAwesomeControllers', []);

IndiAwesomeControllers.controller('HomeCtrl', ['$scope', 'Place','$route',
    function ($scope,Place,$route) {
        jQuery(".awesome_filters").delay(2000).fadeIn(500);
            $scope.places = Place.query();
            $scope.order='popular',
                $scope.$route=$route,
                console.log($route);
    }] )
    .directive('ngplace',function(){
       return{
          restrict:'E',
        templateUrl:'app/place.html'
       };

    });


IndiAwesomeControllers.controller('PlaceDetailCtrl',['$scope','Place','$routeParams','$route',
function($scope,Place,$routeParams,$route){
    $scope.place = Place.get({placeId: $routeParams.placeId});
    $scope.$route=$route
}
]);
IndiAwesomeControllers.controller('CarouselDemoCtrl',['$scope','Place','$routeParams',
    function($scope,Place,$routeParams){
        $scope.myInterval = 2000;
        $scope.images = Place.get({placeId: $routeParams.placeId});

    }
]);
IndiAwesomeControllers.controller('AboutCtrl',['$scope','$route',
    function($scope,$route){
        $scope.$route=$route;
    }
]);
/*IndiAwesomeControllers.controller('MyCtrl',['$scope','$location',
    function($scope,$location){
        $scope.isActive=function(route){
            return route===$location.path();
            console.log(">>>>",route);
        }
    }
]);*/
IndiAwesomeControllers.controller('ContactCtrl',['$scope','$route',
    function($scope,$route){
        $scope.$route=$route;
        $scope.submitForm=function(isValid){
if(isValid){
    alert("our form is amazing");
}

        }
    }
]);
IndiAwesomeControllers.controller('ModalCtrl', [
    '$scope', '$modal', function ($scope, $modal) {

        $scope.modalInstance = {};
        $scope.items=['Stupid','Idiot','Smart'];
        $scope.open = function () {
            var modalInstance = $modal.open({
                templateUrl: 'modal.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
            modalInstance.result.then(function(selectedItem){
                $scope.selected==selectedItem;
            })
        };


    }]);
IndiAwesomeControllers.controller('ModalInstanceCtrl',  function ($scope, $modalInstance,items) {
        $scope.items=items;
        console.log( $scope.items);
        $scope.selected = {
            item: $scope.items[0]
        };
        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
);