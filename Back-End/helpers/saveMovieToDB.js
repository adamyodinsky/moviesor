const logger = require('./logger');
const Movie  = require('../models/Movie');


const saveMovieToDB = async (movie) => {
  try {
    let movieExist = await Movie.findOne({movie: movie.name, release: movie.release});
    if (!movieExist) {
      const movie = new Movie({movie});
      await movie.save();
      logger.info(`Saved ${movie.name} ${movie.release} to DB`);
    }
  } catch (err) {
    logger.error(err.message);
  }
};

module.exports = saveMovieToDB;