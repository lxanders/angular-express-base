'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var path = require('path');
var registerRoutes = require('../../../server/registerRoutes');

chai.use(sinonChai);

describe('registerRoutes', function () {
    it('should serve the index.html file on a catch all route', function () {
        var req = {};
        var res = { sendFile: sinon.spy() };
        var router = { get: sinon.stub().yields(req, res) };
        var indexHtmlPath = path.resolve(__dirname, '..', '..', '..', 'app', 'index.html');

        registerRoutes(router);

        expect(router.get).to.have.been.calledWith('*');
        expect(res.sendFile).to.have.been.calledWithExactly(indexHtmlPath);
    });
});
