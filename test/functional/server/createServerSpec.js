'use strict';

var express = require('express');
var supertest = require('supertest');
var sinon = require('sinon');
var createServer = require('../../../server/createServer');

describe('createServer', function () {
    it('should respond with an html file for /', function () {
        var logger = { info: sinon.spy() };
        var request = supertest(createServer(express(), logger));

        return request.get('/')
            .expect(200)
            .expect('Content-Type', 'text/html; charset=UTF-8');
    });

    it('should respond with an html file for the non existing route /foo/bar/baz', function () {
        var logger = { info: sinon.spy() };
        var request = supertest(createServer(express(), logger));

        return request.get('/foo/bar/baz')
            .expect(200)
            .expect('Content-Type', 'text/html; charset=UTF-8');
    });

    it('should respond with an js file for the /bundle.js route', function () {
        var logger = { info: sinon.spy() };
        var request = supertest(createServer(express(), logger));

        return request.get('/bundle.js')
            .expect(200)
            .expect('Content-Type', 'application/javascript');
    });
});
