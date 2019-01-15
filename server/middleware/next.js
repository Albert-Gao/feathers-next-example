const handle = require('../nextApp').handle;
const isFeathersService = require('../nextApp').isFeathersService;

module.exports = function(options = {}) {
  return function next(req, res, next) {
    if (isFeathersService(req.originalUrl)) {
      return next();
    } else {
      return handle(req, res);
    }
  };
};
