const next = require('next');

const nextApp = next({
  dir: './client',
  dev: process.env.NODE_ENV !== 'production',
});
const handle = nextApp.getRequestHandler();

module.exports = {
  nextApp,
  handle,
};
