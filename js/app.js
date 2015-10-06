/**
 * Created by Aayush Gupta on 10/2/2015.
 */

var touristplacesApp = angular.module('touristplacesApp', [
    'ngRoute',
    'touristlistControllers','touristappServices','ui.bootstrap'
]);

touristplacesApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/places', {
                templateUrl: 'app/place-list.html',
                controller: 'PlaceListCtrl'
            }).
            when('/places/:placeId', {
                templateUrl: 'app/place-detail.html',
                controller: 'PlaceDetailCtrl'

            }).
            when('/about', {
                templateUrl: 'app/about.html',
                controller: 'AboutCtrl'
            }).
            when('/contact', {
                templateUrl: 'app/contact.html',
                controller: 'ContactCtrl'
            }).
            otherwise({
                redirectTo: '/places'
            });
    } ]);

