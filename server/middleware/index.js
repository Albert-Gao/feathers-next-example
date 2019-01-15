const next = require('./next');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.get('*', next());
};
