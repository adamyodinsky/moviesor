const express = require('express');
const main = require("../controllers/randomController");

const routes = () => {
    const router = express.Router();

    router.get('/catalog/random', main)
}