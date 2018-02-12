# feathers-next-example

This is a setup about how to use `feathers` along with `next.js`.

The `feathers` part are based on the code generated from the `feathers-cli`. Which I think should make people understand more easily(because I consider this as the official way).

- The `next.js` part sits inside the `client` folder;
- The `feathers` part sits inside the `server` folder;

Including some optimizing and request handling tips.

When you develop, just `npm run dev`, it will run `feathers`, but any changes you made in the `next` part will be hot reloaded and reflect to the actual page.

When you deploy:

- `npm run build`: To bundle the production ready code.
- `npm run start`: To start the server

See detail step by step in my [blog](http://www.albertgao.xyz/2018/02/04/how-to-do-server-side-rendering-with-feathersjs-and-nextjs/)
