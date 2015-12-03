'use strict';

var angular = require('angular');
var angularRoute = require('angular-route');

angular.module('controllers', []);

require('./controllers/view1');
require('./controllers/view1Details');
require('./controllers/view2');

var app = angular.module('app', [ angularRoute, 'controllers' ]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/view1', {
            template: require('./partials/view1.html'),
            controller: 'View1Controller'
        })
        .when('/view2', {
            template: require('./partials/view2.html'),
            controller: 'View2Controller'
        })
        .when('/view1/:specifier', {
            template: require('./partials/view1Details.html'),
            controller: 'View1DetailsController'
        })
        .otherwise({
            redirectTo: '/view1'
        });

    $locationProvider.html5Mode(true);
});
