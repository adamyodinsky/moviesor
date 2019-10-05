const request = require('request-promise-native');
const logger = require('../helpers/logger');
const config = require('../config/config');

const health = async (req, res) => {
  const options = {
      method: 'GET',
      uri: `http://${config.scraperHost}:${config.scraperPort}/${config.scraperApi}/health`,
      json: true,
      resolveWithFullResponse: true
  };

  try {
    const response = await request(options);
    res.status(response.statusCode).json(response.body);
    logger.info({statusCode: response.statusCode, body: response.body})
  } catch (e) {
    res.status(500).json(e.message);
    logger.error(e.message);
  }

};

module.exports = { health };