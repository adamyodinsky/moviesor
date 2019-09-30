const { body, validationResult } = require('express-validator');
const logger = require('../helpers/logger');

const userValidationRules = (method) => {
  switch (method) {
    case 'createUser': {
      return [
        body('name', 'Name is required').not().isEmpty(),
        body('email', 'Please include a valid email').isEmail(),
        body('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
      ]
    }
  }
};


const validate = (req, res, next) => {
  // validate
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  // make an array of errors messages
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));


  logger.error(extractedErrors);

  return res.status(422).json({
    errors: extractedErrors,
  })
};


module.exports = {
  userValidationRules,
  validate,
};

