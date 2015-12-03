'use strict';

var expect = require('chai').expect;
var express = require('express');
var supertest = require('supertest');
var sinon = require('sinon');
var supertest = require('supertest');
var createLoggerMiddleware = require('../../../../server/system/createLoggerMiddleware');

describe('createLoggerMiddleware', function () {
    it('should use the info method of the passed in logger', function () {
        var logger = { info: sinon.spy() };
        var expressServer = express();
        var loggingMiddleware = createLoggerMiddleware(logger);

        expressServer.use(loggingMiddleware);

        return supertest(expressServer).get('/')
            .expect(function () {
                expect(logger.info).to.have.been.calledOnce;
            });
    });
});
