const express = require('express');
const mainController = require("../controllers/ScrapeTomatoByYear");
const validation = require('../helpers/validation');



const routes = () => {
    const router = express.Router();

    router.get('/', mainController.main);

return router;
};

module.exports = routes;