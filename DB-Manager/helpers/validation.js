const { body, validationResult } = require('express-validator');
const logger = require('../helpers/logger');

const userValidationRules = (method) => {
  switch (method) {
    case 'postMovie': {
      return [
        body('movie.name', 'movie.name is required').not().isEmpty(),
        body('movie.fullName', 'movie.fullName is required').not().isEmpty(),
        body('movie.rank', 'movie.rank is required').not().isEmpty(),
        body('movie.rating', 'movie.rating is required').not().isEmpty(),
        body('movie.genres', 'movie.genres is required').not().isEmpty(),
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

