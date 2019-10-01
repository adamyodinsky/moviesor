const request = require('request-promise-native');
const cheerio = require('cheerio');
const logger  = require('../helpers/logger');
const config  = require('../config/config');
const Movie   = require('../models/Movie');

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
        // Grab html page
        let response = await request(options);

        // Grab all a tags inside td tags
        let a_list = response('.movie_list').find('td.middle_col').find('a');
        // grab uri links of movies

        // Grab all movie names and push to an array
        a_list.each((i, e) => {
            movies.push(e.children[0].data);
            console.log(e.children[0].data);
            console.log("prev-is-null: "+ e.children[0].parent.prev === null);
            console.log("next-is-null: "+ e.children[0].parent.next === null);
            console.log(e.children[0]);
            if (i > 30 ) {
                process.exit(1);
            }
        });

        movies = [...new Set(movies)]; // remove duplicates
        logger.info(`${movies.length} top movies were scraped`);
        return await res.json({movies: movies});

        // Put all scraped movies in DB collection
        let count = 0;
        let new_movies = [];
        for (const element of movies) {
            let m = await Movie.findOne({name: element});
            if(!m){
                new_movies.push(element);
                const movie = new Movie({name: element});
                await movie.save();
                count++;
            }
        }

        logger.info({msg: `${count} new movies were added to Data Base`, movies: new_movies});
        await res.json({msg: `${count} new movies were added to Data Base`, movies: new_movies});
    } catch (error) {
        logger.error(error.message);
        await res.status(500).json(error.message);
    }

};

module.exports = { scrapeTopMovies: scrapeTopMovies };