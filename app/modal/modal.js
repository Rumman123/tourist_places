angular.module('IndiAwesomeApp').controller('ModalCtrl', [
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


    }
]);
/*
angular.module('IndiAwesomeApp').controller('ModalInstanceCtrl',  function ($scope, $modalInstance,items) {
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
);*/
