const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;