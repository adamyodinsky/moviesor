const express = require('express');
const { createUser } = require("../controllers/users");
const { scrapeMovieByYears } = require('../controllers/scrapeMoviesByYears');
const { validate , validationRules } = require('../helpers/validation');
const { health } = require('../controllers/health');
const { auth } = require('../controllers/auth');

const routes = () => {
    const router = express.Router();

    router.get('/health', health);
    router.post('/users', validationRules('users'), validate ,createUser);
    router.post('/scrapeMoviesByYears', validationRules('scrapeMoviesByYears'), validate, scrapeMovieByYears);
    router.post('/auth', auth);
return router;
};

module.exports = routes;