const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dir: './client', dev });
const handle = nextApp.getRequestHandler();

// Add your own services here.
// If the path is not been added here
// it will be passed to next.js
const feathersServices = {
  '/users': true,
};

const isFeathersService = path => feathersServices[path] === true;

module.exports = {
  nextApp,
  handle,
  isFeathersService,
};
