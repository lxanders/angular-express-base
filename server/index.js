'use strict';

var express = require('express');
var logger = require('winston');
var createServer = require('./createServer');

var expressServer = express();
var server = createServer(expressServer, logger);
var port = 3000;

server.listen(port);

logger.info('Server started on port ' + port);
