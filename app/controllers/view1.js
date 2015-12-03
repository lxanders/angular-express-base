'use strict';

var angular = require('angular');

var controllers = angular.module('controllers');

controllers.controller('View1Controller', [ '$scope',
    function ($scope) {
        $scope.viewName = 'view1';
    }
]);
