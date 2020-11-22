# Template literals

> Template literals are string literals allowing embedded expressions. You can use multi-line strings and string 
interpolation features with them.

## Quotes
Template literals are enclosed by the backtick character instead of double or single quotes.

```js
const s = `template literal`;
```

This means you can put single quotes and double quotes inside of them without having to escape them.

```js
const s = `Nacho said, "Don't you want a little taste of the glory! See what it tastes like!"`;
```

## Multiline Strings
Suppose we want a string for the following:
```text
Those eggs were a lie, Esqueleto.
A LIE!
They give me no eagle powers!
They give me no nutrients!
```

We could write this using strings:
```js
const quote = 'Those eggs were a lie, Esqueleto.\n'
  + 'A LIE!\n'
  + 'They give me no eagle powers!\n'
  + 'They give me no nutrients!';
```

Notice we had to put `\n` at the end of each line.

Template literals can span multiple lines and automatically include newline characters.

```js
const quote = `Those eggs were a lie, Esqueleto.
A LIE!
They give me no eagle powers!
They give me no nutrients!`;
```

## Expressions
> Template literals can contain placeholder expressions. These are indicated by the dollar sign and curly braces.

Assume we have the following:
```js
const name = 'Nacho Libre';
const year = 2006;
const rating  = 'PG';
const length = '1h 32min';
const categories = ['Comedy', 'Family', 'Sport'];
const description = 'Berated all his life by those around him, a monk follows his dream and dons a mask to moonlight as a Luchador (Mexican wrestler).';
```

And we want to output:
```text
# Nacho Libre (2006)
PG | 1h 32 min | Comedy, Family, Sport

> Berated all his life by those around him, a monk follows his dream and dons a mask to moonlight as a Luchador (Mexican wrestler).
```

We could write:
```js
console.log(
  '# ' + name + '(' + year + ')\n' +
  rating + ' | ' + length + ' | ' + categories.join(', ') + '\n' +
  '\n' + 
  '> ' + description
);
```

But with template literals we could write:
```js
console.log(`
# ${name} (${year})
${rating} | ${length} | ${categories.join(', ')}

> ${description}
`.trim());
```

> NOTE: `.trim()` removes leading and trailing whitespace from a string.