const request = require('request-promise-native');
const logger  = require('../helpers/logger');
const config  = require('../config/config');
const { validationResult } = require('express-validator');

const createUser = (req, res) => {
    logger.info(req.body);
};

module.exports  = { createUser };