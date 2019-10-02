const request = require('request-promise-native');
const logger  = require('../helpers/logger');
const config  = require('../config/config');

const host = config.scraperHost;
const port = config.scraperPort;
const api  = config.scraperApi;

// a get function making a post request to db manager
const scrapeMovieByYears = async (req, res) => {

  const options = {
    method: 'POST',
    uri: `${host}:${port}/${api}/scrape`,
    json: true,
    body: {
      collection: req.body.collection,
      range: req.body.range
    }
  };

  try {
    // sending request to
    let response = await request(options);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json(error.message);
  }
};

module.exports = { scrapeMovieByYears };