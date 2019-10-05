const request = require('request-promise-native');
const logger = require('../helpers/logger');
const config = require('../config/config');
const User = require('../models/User');

// @route GET /api/auth
const auth = async (req, res) => {
  try {
    // get user by id from DB without his password
    const user = await User.findById(req.user.id).select('-password');
    //TODO add if user not exist condition

    res.status(200).json(user);
    logger.info({status: 200, body: user});
  } catch (e) {
    res.status(500).json(e.message);
    logger.error(e.message);
  }
  
  
};

module.exports = { auth };