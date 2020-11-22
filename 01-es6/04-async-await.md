# Async Functions

> An async function is a function declared with the `async` keyword. The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

## `async` keyword
You may declare a function as asynchronous using the `async` keyword.
```js
// Async function declaration
async function a() {
  // ...
}

// Async function expression
const b = async function() {
  // ...
};

// Async arrow function
const c = async () => {
  // ...
}
```

All Async functions will return a `Promise`.

## `await` keyword
> Async functions can contain zero or more `await` expressions. Await expressions suspend progress through an async function, yielding control and subsequently resuming progress only when an awaited promise-based asynchronous operation is either fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression.

In an Async function you can use the `await` keyword to wait for a promise to complete and read the value out of the promise.

```js
// Without async/await
const loadApi = () => {
  fetch("https://api.com")
    .then(response => {
      return response.json()
        .then(json => {
          console.log("Loaded", json);
        })
    })
};
```
```js
// With async/await
const loadApi = async () => {
  const response = await fetch("https://api.com");
  const json = await response.json();
  console.log("Loaded", json);
};
```

## Error Handling
> Use of `async` / `await` enables the use of ordinary `try` / `catch` blocks around asynchronous code.

When a promise resolves the `.then()` method is executed.  If the promise instead rejects the `.catch()` method is executed.  To handle these rejections in an Async function we use `try...catch` blocks.

```js
// Without async/await
const example = () => {
  fetch(url)
    .then(value => console.log("Success", value))
    .catch(err => console.error(err));
};
```

```js
// With async/await
const example = async () => {
  try {
    const value = await fetch(url);
    console.log("Success", value);
  } catch(err) {
    console.error(err);
  }
};
```

## Aside: Promise
Async functions always return a promise, which means you can call handle them from regular functions.

```js
const doSomething = async () => {
  // ...
};

const example = () => {
  doSomething()
    .then(() => console.log("Done"));
}
```

## Aside: Await
The `await` keyword can only be used within an `async` function.  It may be tempting to write code like this:
```js
const inquirer = require("inquirer");
const fs = require("fs/promises");

const questions = [
  { name: 'file', message: 'File?' },
  { name: 'text', message: 'Text?' },
];

const { file, text } = await inquirer.prompt(questions);
await fs.writeFile(file, text);
console.log("Done!");
```

But you'll need to create an `async` function first!

```js
const inquirer = require("inquirer");
const fs = require("fs/promises");

const run = async () => {
  const questions = [
    { name: 'file', message: 'File?' },
    { name: 'text', message: 'Text?' },
  ];

  const { file, text } = await inquirer.prompt(questions);
  await fs.writeFile(file, text);
  console.log("Done!");
}
run();
```

## Aside: Looping
Looping with promises requires recursion.

> The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems.

> If you google `recursion` they prompt you with:
>
> Did you mean: [recursion](https://google.com/search?q=recursion)
>
> which redirects back to the exact page you are on, because developers are nerds.

Recursive functions can be confusing to follow even for seasoned developers. It requires a bit of "Thinking with Portals" to follow the code execution.

As a simple example let's use `inquirer` to prompt the user with `"Again?"`.  As long as they select to continue then we will prompt them again.  As soon as they choose not to continue then we will print `"Done!"` and exit the application.

```js
const inquirer = require('inquirer');

const again = () => inquirer
  .prompt([{ name: 'repeat', message: 'Again?' }])
  .then(({ repeat }) => {
    if (repeat) {
      return again();
    }
  });

again()
  .then(() => console.log("Done!"));
```

In this example we can see that the `again` function continues to recursively call itself and repeat the entire process over if the users chooses so.

With `async`/`await` we can simply call this in a loop.

```js
const inquirer = require('inquirer');

const run = async () => {
  while(true) {
    const { repeat } = await inquirer.prompt([{ name: 'repeat', message: 'Again?' }]);
    if (!repeat) {
      break;
    }
  }

  console.log("Done!");
}

run();
```