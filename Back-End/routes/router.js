const express = require('express');
const scrapeTopMovies = require("../controllers/scrapeTopMovies");
const mainController = require("../controllers/main");
const usersController = require("../controllers/createUser");
const scrapeController = require('../controllers/scrapeMoviesByYears');
const validation = require('../helpers/validation');



const routes = () => {
    const router = express.Router();

    router.post('/scrape', scrapeController.scrapeMovieByYears);

    router.get('/', mainController.main);
    router.post('/users', validation.userValidationRules('createUser'), validation.validate ,usersController.createUser);

return router;
};

module.exports = routes;