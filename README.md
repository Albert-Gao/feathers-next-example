# feathers-next-example

This is a setup about how to use `feathers` along with `next.js`.

## What about the code

The `feathers` part are based on the code generated from the `feathers-cli`. Which I think should make people understand more easily(because I consider this as the official way).

## Folder Structure

- `client`: `next.js` part;
- `server`: `feathers` part;

Including some optimizing and request handling tips.

## How to dev

When you develop, just `npm run dev`, it will run `feathers`, but any changes you made in the `next` part will be hot reloaded and reflect to the actual page.

## How to deploy

- `npm run build`: To bundle the production ready code.
- `npm run start`: To start the server

## More details

See detail step by step in my [blog](http://www.albertgao.xyz/2018/02/04/how-to-do-server-side-rendering-with-feathersjs-and-nextjs/)
