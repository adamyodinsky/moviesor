const mongoose = require('mongoose');


const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  synopsis: {
    type: String
  },
  genres: {
    type: [String],
    required: true
  },
  directors: {
    type: [String]
  },
  writers: {
    type: [String]
  },
  release: {
    type: String,
    required: true
  },
  boxOffice: {
    type: String
  },
  runtime: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Movie = mongoose.model('moviesTomato', MovieSchema);

module.exports = Movie;