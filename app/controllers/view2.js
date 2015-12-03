'use strict';

var angular = require('angular');

var controllers = angular.module('controllers');

controllers.controller('View2Controller', [ '$scope', 'ExampleService',
    function ($scope, ExampleService) {
        $scope.viewName = 'view2';
        $scope.numbers = ExampleService;
    }
]);
