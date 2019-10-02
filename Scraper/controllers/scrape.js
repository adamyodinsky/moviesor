const logger  = require('../helpers/logger');
const config  = require('../config/config');
const scrape  = require('../scraper/scraper').superCrawler;

//TODO a function that choose a scraper by body.collection


const scrapeTomatoByYear = async (req, res) => {

  const { range, collection }  = req.body;

  if (Number(range.start) < 1920) {
    logger.warn("Start value is under 1920 - To low");
    return;
  }

  // start scraping
  try {
    res.status(202).json({msg: 'Scraping started', range, collection});
    await scrape(range);
    //TODO after scraping finished without an error, send to a webhook api that scraping ended successfully
  } catch (error) {
    logger.error(error.message);
    res.status(500).json(error.message);
  }
};

module.exports = { scrapeTomatoByYear };