'use strict';

var angular = require('angular');
var R = require('ramda');

var services = angular.module('services');

services.factory('ExampleService', function () {
    return R.times(Math.random, 10);
});
