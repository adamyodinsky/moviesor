const config  = require('./config/config');
const express = require('express');
const router = require('./routes/router')();
const logger  = require('./helpers/logger');
const connectDB = require('./config/db');

const app = express();

//init Middleware
app.use(express.json({extended: true}));

app.use(function (error, req, res, next) {
    if(error instanceof SyntaxError){ //Handle SyntaxError here.
        logger.error("Invalid data");
        return res.status(500).send({data : "Invalid data"});
    } else {
        next();
    }
});

app.use('/v1', router);

connectDB();

app.listen(3000, ()=> {
    logger.info(`Server running on ${config.appHost}:${config.appPort}`);
});

