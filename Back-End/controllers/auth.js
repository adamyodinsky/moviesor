const request = require('request-promise-native');
const logger = require('../helpers/logger');
const config = require('../config/config');

const auth = (req, res) => {
  res.send("auth route");
};

module.exports = { auth };