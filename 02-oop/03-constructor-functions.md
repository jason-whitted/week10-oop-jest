# Constructor Functions

In the previous example:
```js
const bob = new Person("Bob", 42);
```

`Person` is a constructor function.  It is receiving two parameters ("Bob" and 42) and is returning a new instance of a Person object.

As a standard, constructor functions are named in PascalCase to let the caller know they are constructor functions and require the `new` keyword.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.speak = function() {
    console.log(`Hello, I'm ${this.name} and I am ${this.age} years old.`);
  }
}
```

You do not need to return anything from a constructor function.  This function's job is to merely initialize `this` instance.

Once this constructor function has been established we can create new instances of the Person object with:

```js
const bob = new Person("Bob", 42);
```

## Under the hood
Something similar to the following is happening:

- `new` creates a new empty object (`{}`)
- the new object has it's prototype set to the `Person` object
- `.bind()` is called on the `Person` function and the new empty object is passed as the `this` argument
- the constructor function adds a `name` property onto the `this` object and assigns it the value from the `name` parameter
- the constructor function adds an `age` property onto the `this` object and assigns it the value from the `age` parameter
- the constructor function creates a `speak` method
- the constructor function finishes and the resulting `this` object is automatically returned and referenced by the `bob` variable

## `this` Binding

Additionally, the `speak` method has the `this` value appropriately set in scope, which means we could actually use an arrow function here.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.speak = () => {
    console.log(`Hello, I'm ${this.name} and I am ${this.age} years old.`);
  };
}
```

And since arrow functions are auto-bound the `this` will always point to the correct object and cannot be changed.

```js
var s1 = bob.speak;
s1(); // Hello, I'm Bob and I am 42 years old.

var s2 = bob.speak.bind(sue);
s2(); // Hello, I'm Bob and I am 42 years old.
```

## Aside
Constructor Functions are "old school".  ES6 has newer, better ways of doing this.  We cover them briefly and then avoid using them altogether in favor of the ES6 patterns.


