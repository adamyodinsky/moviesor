const request = require('request-promise-native');
const logger  = require('../helpers/logger');
const config  = require('../config/config');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    logger.info(req.body);
    const { name, password, email } = req.body;

    try {
        // See if user exists
        let user = await User.findOne({ email });

        if(user) {
            return res.status(400).json({errors: [{msg: `User with ${email} already exists`}]});
        }

        // Get users gravatar
        const avatar = gravatar.url(email, {
            s: '200', // default size
            r: 'pg',  // rating
            d: 'mm'   // default image
        });

        // Create a user
        user = new User({name, email, avatar, password});

        // Encrypt password - bcrypt
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        // save user to data base
        await user.save();

     // return jsonwebtoken

        await res.json(`User ${name} has been registered successfully`);
    } catch (error) {
        logger.error(error.message);
        await res.status(500).json(error.message);
    }

};

module.exports  = { createUser };