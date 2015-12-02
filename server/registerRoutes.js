'use strict';

var path = require('path');

module.exports = function (router) {
    router.get('*', function (req, res) {
        res.sendFile(path.resolve(__dirname, '..', 'app', 'index.html'));
    });

    return router;
};
