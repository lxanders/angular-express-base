'use strict';

var path = require('path');

module.exports = {
    entry: {
        app: [ './app/app.js' ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    }
};
