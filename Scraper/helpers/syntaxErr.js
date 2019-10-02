const logger  = require('../helpers/logger');

const syntaxErr = (error, req, res, next) => {
  if(error instanceof SyntaxError){ //Handle SyntaxError here.
    logger.error("Invalid data - SyntaxError");
    return res.status(500).send({data : "Invalid data - SyntaxError"});
  } else {
    next();
  }
};

module.exports = syntaxErr;