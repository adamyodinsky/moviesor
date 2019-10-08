const logger = require('../helpers/logger');
const config = require('../config/config');
const mongoose = require('mongoose');

const getRandomMovie = async(req, res) => {
  try {
    // get a random index of a movie
    const collection = await mongoose.connection.db.collection(config.tomatoModelName);
    const moviesCount = await collection.countDocuments();
    const random = await Math.floor(Math.random() * moviesCount);

    // grab a random movie and send it
    const movie = await collection.find().limit(-1).skip(random).next();
    res.status(200).json(movie);
    logger.info({status: 200, body: movie.fullName});
  } catch (e) {
    logger.error(e.message);
    res.status(500).json(e.message);
  }
};


module.exports = { getRandomMovie };