const request = require('request-promise-native');
const cheerio = require('cheerio');
const logger  = require('../helpers/logger');
const config  = require('../config/config');


const url_tomato = `${config.tomatoUri}/top`;


const scrapeTopMovies = async (req, res) => {
    const options = {
        uri: url_tomato,
        transform: (body) => {
            return cheerio.load(body);
        }
    };
    
    let movies = [];

    try {
        // grab html page
        let response = await request(options);
        // grab all a tags inside td tags
        let a_list = response('.movie_list').find('td.middle_col').find('a');

        // grab all movie names and push to an array
        a_list.each((i, e) => {
            movies.push(e.children[0].data);
        });
        logger.info(`${movies.length} top movies were scraped`);
        await res.json({movies: movies});
    } catch (error) {
        logger.error(error.message);
        await res.json(error.message);
    }

};

module.exports = { scrapeTopMovies: scrapeTopMovies };