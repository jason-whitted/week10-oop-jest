# Node Scripts
The `package.json` file has a `scripts` section that allows you to specify custom scripts.

## `start`
The `start` script is the standard script used to "run" the application.

Let's assume, by default, whenever we run the application we want to run:
```bash
node index.js Hello World!
```

We could configure the `start` script in the `package.json` as follows:
```json
{
  "scripts": {
    "start": "node index.js Hello World!"
  }
}
```

You can tell it to run a specific script by running either of the following commands:
```bash
npm run start
yarn run start
```

But because `start` is so common, both `npm` and `yarn` support running this without even using the `run` command:

```bash
npm start
yarn start
```

## `test`
Testing your application is also frequently done and the standard is to use `test` as your script name.

You could define it in the `package.json` file:

```json
{
  "scripts": {
    "start": "node index.js Hello World!",
    "test": "node test.js"
  }
}
```

And, much like `start`, you can run it with or without the `run` command.
```bash
npm run test
npm test
yarn run test
yarn test
```

## Custom Scripts
You aren't limited to just `start` and `test` though.  You can add any other scripts you would like:
```json
{
  "scripts": {
    "start": "node index.js Hello World!",
    "test": "node test.js",
    "end": "node index.js Goodbye World!",
    "nacho": "node index.js Nacho Libre"
  }
}
```

You can run the `nacho` script by running any of the following:
```bash
npm run nacho
# npm nacho
yarn run nacho
yarn nacho
```

> NOTE: `npm nacho` does not work.  Only `start` and `test` are supported without `run` with `npm`.

## Additional Arguments
You can even pass additional, unspecified arguments to the predefined scripts.

```bash
npm run nacho is amazing
yarn run nacho is amazing
yarn nacho is amazing
```

These are essentially running:
```bash
node index.js Nacho Libre is amazing
```
