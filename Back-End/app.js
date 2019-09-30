const express = require('express');
const router = require('./routes/router')();
const bodyParser = require('body-parser');
const logger  = require('./helpers/logger');
const config  = require('./config/config');

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(3000, ()=> {
    logger.info(`Server running on ${config.appHost}:${config.appPort}`);
});