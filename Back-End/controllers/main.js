const logger  = require('../helpers/logger');
const config  = require('../config/config');

const main = async (req, res) => {
  logger.info("Moviesor!");
  res.send("Moviesor!");
};

module.exports = { main };