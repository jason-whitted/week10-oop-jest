# Nested Promises

We've seen that Promises allow much greater control over asynchronous code execution than traditional callback functions.  

Let's suppose we want to perform the following:
- Fetch `https://a.com`
- When that is complete, fetch `https://b.com`
- When that is complete, fetch `https://c.com`
- When that is complete, fetch `https://d.com`
- When that is complete, output `"Done!"` to the console.

We could write:
```js
fetch('https://a.com').then(() => {
  fetch('https://b.com').then(() => {
    fetch('https://c.com').then(() => {
      fetch('https://d.com').then(() => {
        console.log("Done!");
      })
    })
  })
});
```

Look familiar? Promises also suffers from **Callback Hell**.

In many cases when we are dealing with promises, we actually only care about the resulting code when the promise is finished.  Ideally we would like to write code that looked like this.

```js
fetch('https://a.com');
fetch('https://b.com');
fetch('https://c.com');
fetch('https://d.com');
console.log("Done!");
```

But this would actually fire off all 4 fetches at the same time and immediately print `"Done"` before any of them completed.