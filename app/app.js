'use strict';

var angular = require('angular');
var angularRoute = require('angular-route');

angular.module('controllers', []);

require('./controllers/view1');

var app = angular.module('app', [ angularRoute, 'controllers' ]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/view1', {
            template: require('./partials/view1.html'),
            controller: 'View1Controller'
        })
        .otherwise({
            redirectTo: '/view1'
        });

    $locationProvider.html5Mode(true);
});
