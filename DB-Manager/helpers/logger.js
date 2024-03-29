"use strict";

const bunyan = require('bunyan');
const config = require('../config/config');

let logger = bunyan.createLogger({
    name: "Moviesor-BackEnd",
    src: true,
    streams: [
        {
            level: config.logLevel,
            stream: process.stdout
        }
    ]
});

if (process.env.NODE_ENV === "unit-test") {
    logger.level(bunyan.FATAL + 1);
}

module.exports = logger;
