const config  = require('./config/config');
const express = require('express');
const router = require('./routes/router')();
const logger  = require('./helpers/logger');
const connectDB = require('./config/db');
const syntaxErr = require('./helpers/syntaxErr');

const app = express();
connectDB();

//init Middleware
app.use(express.json({extended: true}));
app.use(syntaxErr);

app.use('/v1', router);


app.listen(3000, ()=> {
    logger.info(`Server running on ${config.appHost}:${config.appPort}`);
});

