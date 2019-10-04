const logger = require('../helpers/logger');
const Movie  = require('../models/Movie');
// const config  = require('../config/config');
// const request = require('request-promise-native');

const postMovie = async (req, res) => {

  const { movie, collection } =  req.body;

  try{
    res.status(202).json(`Save to '${collection}' collection. Movie: '${movie.fullName}' - Request Accepted`);
    logger.info(`${movie.fullName} request for save to ${collection} accepted`);
  } catch (e) {
    res.status(500).json(e.message);
    logger.error(e.message);
  }

  try {
    let movieExist = await Movie.findOne( {fullName: movie.fullName} );
    if (movieExist) {
      logger.debug('Movie already exists');
      // TODO - add a request sending about process status
      return;
    }
      const newMovie = new Movie( {...movie} );
      await newMovie.save();
      logger.info(`Saved Movie: ${movie.name}, Year: ${movie.release}, To Collection: ${collection}`);
  } catch (err) {
    logger.error(err.message);
    // return;
  }
//  TODO send a request to a webhook about the success of the process
};

module.exports = { postMovie };