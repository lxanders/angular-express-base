'use strict';

var express = require('express');
var createLoggerMiddleware = require('./system/createLoggerMiddleware');
var registerRoutes = require('./registerRoutes');

module.exports = function (expressServer, logger) {
    expressServer.use(createLoggerMiddleware(logger));

    /* eslint-disable new-cap */
    expressServer.use('/', registerRoutes(express.Router()));
    /* eslint-enable new-cap */

    return expressServer;
};
