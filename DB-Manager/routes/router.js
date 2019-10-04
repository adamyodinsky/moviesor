const express = require('express');
const validation = require('../helpers/validation');
const movie = require('../controllers/movie');


const routes = () => {
    const router = express.Router();

    router.post('/catalog/movie', validation.userValidationRules('postMovie'), validation.validate, movie.postMovie);
    // router.get('/catalog/movie');


return router;
};

module.exports = routes;