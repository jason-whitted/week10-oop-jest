# Class

Monkeying around with constructor functions and fiddling with multiple levels of prototypes manually was more difficult than it needed to be.  Along comes ES6 and `class` declarations.

> Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 classalike semantics.

The ES6 `class` declaration are syntactic sugar, which allows us to create classes without having to write constructor functions.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak = () => console.log(`Hello, I'm ${this.name} and I am ${this.age} years old.`);
}
```

The `constructor` is what is called when you create a `new` instance.

```js
var bob = new Person("Bob", 42);
```

Notice that the `speak` method is defined inside the class, but outside the constructor.  We could have defined it inside the constructor as well, but we would need to use `this.speak`.  Additionally, the `speak` method was created using an arrow function, which implies that the `this` is well-known inside the `Person` class.

This does, again, create a new `speak` method for each instance of a `Person` class.

```js
bob.speak === sue.speak; // false
```

## Static members
Use the `static` keyword before a member to define it as a staic member.

```js
class Person {
  static isPerson = p => p instanceof Person;

  // constructor() { ... }

  // speak = () => { ... }
}
```

## Instance members
Instance members can be defined inline like the `speak` method above, or using the `.prototype` property after the class has been declared.

```js
class Person {
  // constructor() { ... }

  inlineMethod = () => {
    // ...
  }
}

Person.prototype.protoMethod = function() {
  // ...
}
```
