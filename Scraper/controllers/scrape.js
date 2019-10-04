const logger  = require('../helpers/logger');
const config  = require('../config/config');
const scrape  = require('../scraper/scraper').superCrawler;

//TODO a function that choose a scraper by body.collection


const scrapeTomatoByYear = async (req, res) => {

  const { range, collection }  = req.body;

  if (Number(range.start) < 1920) {
    logger.warn("Please choose Start value from 1920 and above.");
    return;
  }

  // start scraping
  //TODO after scraping finished, send to a webhook api about scraping ended status
  try {
    res.status(202).json({msg: 'Scraping started', range, collection});
    await scrape(range);
  } catch (error) {
    logger.error(error.message);
  }
};

module.exports = { scrapeTomatoByYear };