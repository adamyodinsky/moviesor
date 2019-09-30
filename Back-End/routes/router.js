const express = require('express');
const scrapeTopMovies = require("../controllers/scrapeTopMovies");
const mainController = require("../controllers/mainController");

const routes = () => {
    const router = express.Router();

    // Main
    router.get('/', mainController.main);

    // Random movie
    router.get('/random', scrapeTopMovies.scrapeTopMovies);

return router;
};

module.exports = routes;