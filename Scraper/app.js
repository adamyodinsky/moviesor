const config  = require('./config/config');
const express = require('express');
const router = require('./routes/router')();
const logger  = require('./helpers/logger');
const syntaxErr = require('./helpers/syntaxErr');

const app = express();

//init Middleware
app.use(express.json({extended: true}));
app.use(syntaxErr);

app.use('/v1', router);


app.listen(config.appPort, ()=> {
    logger.info(`Server running on ${config.appHost}:${config.appPort}`);
});

