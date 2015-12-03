'use strict';

var angular = require('angular');

var controllers = angular.module('controllers');

controllers.controller('View2Controller', [ '$scope',
    function ($scope) {
        $scope.viewName = 'view2';
    }
]);
