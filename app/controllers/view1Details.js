'use strict';

var angular = require('angular');

var controllers = angular.module('controllers');

controllers.controller('View1DetailsController', [ '$scope', '$routeParams',
    function ($scope, $routeParams) {
        $scope.viewName = 'view1Details';
        $scope.specifier = $routeParams.specifier;
    }
]);
