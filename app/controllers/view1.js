'use strict';

var angular = require('angular');

var controllers = angular.module('controllers');

controllers.controller('View1Controller', [ '$scope',
    function ($scope) {
        $scope.viewName = 'view1';
        $scope.names = [ 'Jane Doe', 'John Doe', 'Jane Smith', 'Pete' ];
    }
]);
