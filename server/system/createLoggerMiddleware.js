'use strict';

var morgan = require('morgan');

function getInfoStream(logger) {
    return {
        write: function (message) {
            logger.info(message);
        }
    };
}

module.exports = function (logger) {
    return morgan('combined', { stream: getInfoStream(logger) });
};
