/**
 * Created by Aayush Gupta on 10/2/2015.
 */

var IndiAwesomeApp = angular.module('IndiAwesomeApp', [
    'ngRoute',
    'IndiAwesomeControllers','IndiAwesomeServices','ui.bootstrap'
]);

IndiAwesomeApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/places', {
                templateUrl: 'app/place-list.html',
                controller: 'HomeCtrl',
                activetab:'places'
            }).
            when('/places/:placeId', {
                templateUrl: 'app/place-detail.html',
                controller: 'PlaceDetailCtrl',
                activetab:'places'

            }).
            when('/about', {
                templateUrl: 'app/about.html',
                controller: 'AboutCtrl',
                activetab:'about'
            }).
            when('/contact', {
                templateUrl: 'app/contact.html',
                controller: 'ContactCtrl',
                activetab:'contact'
            }).
            otherwise({
                redirectTo: '/places',

            });
    } ]);

