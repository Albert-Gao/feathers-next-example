# feathers-next-example

This is a setup about how to use `feathers` along with `next.js`.

## What about the code

The `feathers` part are based on the code generated from the `feathers-cli`. Which I think should make people understand more easily(because I consider this as the official way).

## Folder Structure

- `client`: `next.js` part;
- `server`: `feathers` part;

Including some optimizing and request handling tips.

## How to dev

Normally, you just use `npm run server:dev`, then you can work on the server and client at the same time. It will run `feathers.js`. But any changes you made in the `./client/` part will be hot reloaded and reflect to the actual page.

If you only want to work on the client side, just call `npm run client:dev`

## How to deploy

1. `npm run client:build`: To bundle the production ready code.
2. `npm run server:start:prod`: To start the server. (You might want to use `PM2` or `nodemon` here.)

## How to check it works

- Run the `feathers` server: `npm run server:dev`
- Open `http://localhost:3030`, see `next` page
- Open `http://localhost:3030/users`, see `feathers.js` error page
- Update `./client/pages/index.js`, see the hot module reloading

## Important

Every time you add a `feathers service`, make sure to add it to `./server/nextApp.js`:

```javascript
const feathersServices = {
  '/users': '/users',
};
```

## More details

See detail step by step in my [blog](http://www.albertgao.xyz/2018/02/04/how-to-do-server-side-rendering-with-feathersjs-and-nextjs/)
