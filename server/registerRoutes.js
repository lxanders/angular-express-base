'use strict';

var path = require('path');

module.exports = function (router) {
    router.get('/bundle.js', function (req, res) {
        res.sendFile(path.resolve(__dirname, '..', 'build', 'bundle.js'));
    });

    router.get('*', function (req, res) {
        res.sendFile(path.resolve(__dirname, '..', 'app', 'index.html'));
    });

    return router;
};
