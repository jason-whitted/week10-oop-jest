# [Jest](https://jestjs.io)

> Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
>
> It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

## Installation

```bash
npm i jest
```

## Documentation

### `expect()`
> When you're writing tests, you often need to check that values meet certain conditions. expect gives you access to a number of "matchers" that let you validate different things.

The `expect()` function allows you to write assertions, which will throw an informative error if they do not pass.

```js
expect(actual).toBeTruthy();
expect(actual).toBeFalsy();
expect(actual).toBeNull();
expect(actual).toBeUndefined();
expect(actual).toBeNaN();
expect(actual).toBe(expected);
expect(actual).toEqual(expected);
expect(actual).toContain(expected);
expect(actual).toBeInstanceOf(type);
```

- `.toBe(value)` is `===`
- `.toEqual(value)` compares all property values recursively
- `.toContain(value)` checks if a value is in an array
- `.toBeInstanceOf(type)` checks `instanceof`

### `expect().not`
You can invert your assertion logic with `.not`.

```js
expect(actual).not.toBeNull();
expect(actual).not.toBe(expected);
```

### `test(name, fn[, timeout])`
The `test()` function runs your assertions for a specific test.

```js
// testing 2 + 2
test('checks if sum is 4', () => {
  expect(2 + 2).toBe(4);
});
```

The `test()` method has an alias `it()`, which I prefer for readability, but you can use either.  It usually start my test name's with the word "should" and then my tests read as "it should ....".

```js
// testing 2 + 2
it('should be 4', () => {
  expect(2 + 2).toBe(4);
});
```

### `describe(name, fn)`
> `describe()` creates a block that groups together several related tests.

```js
describe('2 + 2', () => {
  it('should be a number', () => {
    expect(2 + 2).toBeInstanceOf(Number);
  });

  it('should be 4', () => {
    expect(2 + 2).toBe(4);
  });
});
```

## Intellisense
1. Install Jest type definitions
```bash
npm i @types/jest
```

2. Create `jsconfig.json` file
```json
{
    "typeAcquisition": {
        "include": [
            "jest"
        ]
    }
}
```

## Configuration
Update `package.json` file.
```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Then you can run the tests with:
```bash
npm test
yarn test
```

### Watching tests
The Jest CLI has a `--watch` flag that will watch for file changes and automatically rerun any impacted tests.  **This feature is amazing!**
