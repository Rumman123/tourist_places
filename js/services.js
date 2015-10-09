/**
 * Created by Aayush Gupta on 10/3/2015.
 */

var IndiAwesomeServices=angular.module('IndiAwesomeServices',['ngResource']);

IndiAwesomeServices.factory('Place',['$resource',function($resource){
    return $resource('assets/json/:placeId.json',{},{
        query:{method:'GET',params:{placeId:'places'},isArray:true}
    });
}]);


