# Nested Callbacks

We've seen that JavaScript frequently uses callback functions to handle "completion" code.

```js
setTimeout(callback, delay);
element.addEventListener(type, callback);
fetch(url).then(callback);
fs.writeFile(filename, text, callback);
```

## Delayed Execution
The callback function is usually executed at some point in the future (not immediately).

```js
console.log("A");
fs.writeFile(filename, text, () => console.log("B"));
console.log("C");
```

In this example the output would be:
```text
A
C
B
```

## Nesting
Let's suppose we have a function `example` that had the following signature:
```js
(String, Function) => void
```

And we want to perform the following:
- Call `example` and pass `"A"`
- When that is complete, call `example` and pass `"B"`
- When that is complete, call `example` and pass `"C"`
- When that is complete, call `example` and pass `"D"`
- When that is complete, output `"Done!"` to the console.

We could write:
```js
example("A", () => {
  example("B", () => {
    example("C", () => {
      example("D", () => {
        console.log("Done!");
      })
    })
  })
});
```

This is an illustration of nesting callbacks which quickly becomes hard to read, which is colloquially refered to as **Callback Hell**.
