const express = require('express');
const scrapeTopMovies = require("../../TESTING/scrapeTopMovies");
const mainController = require("../controllers/main");
const usersController = require("../controllers/createUser");
const scrapeController = require('../controllers/scrapeMoviesByYears');
const validation = require('../helpers/validation');



const routes = () => {
    const router = express.Router();

    router.get('/', mainController.main);
    router.post('/users', validation.userValidationRules('users'), validation.validate ,usersController.createUser);
    router.post('/scrapeMoviesByYears', validation.userValidationRules('scrapeMoviesByYears'), validation.validate, scrapeController.scrapeMovieByYears);

return router;
};

module.exports = routes;