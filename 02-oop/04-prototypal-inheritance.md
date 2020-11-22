# Prototypal Inheritance

> JavaScript is a bit confusing for developers experienced in class-based languages...
>
> When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its **prototype**. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this **prototype chain**.

## `instanceof` operator
> The `instanceof` operator tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

You can use the `instanceof` operator to see if an object is an instance of a constructor function.

```js
const bob = new Person("Bob", 42);
const sue = new Person("Sue", 21);
const dog = { 
  name: "Fido", 
  age: 3, 
  speak: function() {
    console.log("Woof!");
  },
};

if (bob instanceof Person) { // true
  console.log("Bob is a Person!");
}

if (sue instanceof Person) { // true
  console.log("Sue is a Person!");
}

if (dog instanceof Person) { // false
  console.log("Dog is a Person!");
}
```

The reason it says "anywhere in the prototype chain" is because an object may only inherit from one type, but that type may inherit from a different type, etc.

For example, you might have the following:
```js
const fido = new Poodle("Fido", 3);
fido instanceof Poodle; // true
fido instanceof Dog;    // true
fido instanceof Mammal; // true
fido instanceof Car;    // false
```

## Members
The term **member** is used to refer to any property (value or method) of an object.

Examples of members on the Person type:
- `bob.name` is a String value
- `bob.age` is a Number value
- `bob.speak` is a method

## Static members
The term **static** means the member is available on the type itself -- you do not need to create an instance of the type before using it.

```js
Number.isNaN(number);
Object.keys(object);
Array.isArray(array);
```

In all of these cases `Number`, `Object`, and `Array` are constructor functions (types), but the `isNaN` method is available directly on the `Number` constructor function itself.

```js
function Person(name, age) {
  // ...
}

Person.isPerson = p => p instanceof Person;

console.log(Person.isPerson(bob)); // true
console.log(Person.isPerson(fido)); // false
```

## Instance members
The term **instance** means the member on every instance of the type (created using the `new` keyword).

In the person example the current instance members are `name`, `age`, and `speak`, because we defined these directly in the constructor function by assigning them explicitly to the `this` variable.

One side effect of this process though, is that each new `Person` object declares it's own `speak` method. This means that `bob.speak` and `sue.speak` are two different functions, which makes sense since we used arrow functions to explicitly bind the functions to the individual instances during instanciation.

```js
bob.speak === sue.speak; // false
```

There is actually a way to define the method only once, which is more efficient in memory.  We do this by specifying the method on the `.prototype` of the constructor function.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.speak = function() {
  console.log(`Hello, I'm ${this.name} and I am ${this.age} years old.`);
}
```

When we do this though, we can no longer use an arrow function because we need `this` to switch depending on which `Person` instance we are invoking.

```js
bob.speak(); // Hello, I'm Bob and I am 42 years old.
sue.speak(); // Hello, I'm Sue and I am 21 years old.
bob.speak === sue.speak; // true
```

This is exactly why when you search for `MDN array filter` you see the resulting page is `Array.prototype.filter()`.  When you see `Array.prototype.filter()` you can think of it as `filter` is a **method** on every instance of the `Array` type.

