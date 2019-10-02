const express = require('express');
const scrape = require("../controllers/scrape");
const validation = require('../helpers/validation');

const routes = () => {
    const router = express.Router();
    router.post('/scrape', validation.userValidationRules('scrape'), validation.validate, scrape.scrapeTomatoByYear);

return router;
};

module.exports = routes;