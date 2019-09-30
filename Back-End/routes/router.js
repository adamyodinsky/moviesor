const express = require('express');
const scrapeTopMovies = require("../controllers/scrapeTopMovies");
const mainController = require("../controllers/main");
const usersController = require("../controllers/createUser");
const validation = require('../helpers/validation');



const routes = () => {
    const router = express.Router();

    router.get('/', mainController.main);
    router.get('/topMovies', scrapeTopMovies.scrapeTopMovies);
    router.post('/users', validation.userValidationRules('createUser'), validation.validate ,usersController.createUser);

return router;
};

module.exports = routes;