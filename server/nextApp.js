const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dir: './client', dev});
const handle = nextApp.getRequestHandler();

const feathersServices = [
  '/users'
];

const isFeathersService = (path) =>
  feathersServices.some((item) =>
    path.indexOf(item) > -1
  );

module.exports = {
  nextApp,
  handle,
  isFeathersService
};
