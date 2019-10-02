const logger  = require('../helpers/logger');
const config  =  require('../config/config');

const scrapeTomatoByYear = async (req, res) => {
  logger.info(config.appName);
  try {
    res.send(config.appName);
  } catch (err) {
    logger.error(err.message);
  }
};

module.exports = { main: scrapeTomatoByYear };