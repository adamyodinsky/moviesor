const express = require('express');
const randomController = require("../controllers/randomController");

const routes = () => {
    const router = express.Router();

    // Main
    // router.get('./',  function (req, res) {
    //     res.send('Welcome to Moviesor!')
    // });

    // Random movie
    router.get('/random', randomController.randomMovieRoute);

    return router;
};

module.exports = routes;