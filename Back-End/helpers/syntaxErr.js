const logger  = require('../helpers/logger');

const syntaxErr = (error, req, res, next) => {
  if(error instanceof SyntaxError){ //Handle SyntaxError here.
    logger.error("Invalid data");
    return res.status(500).send({data : "Invalid data"});
  } else {
    next();
  }
};

module.exports = syntaxErr;