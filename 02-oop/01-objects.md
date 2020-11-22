# Objects

Programmers hate repeating themselves. I repeat, programmers hate repeating themselves.

```js
const bob = {
  name: "Bob",
  age: 42,
  speak: function() {
    console.log(`Hello, I'm ${this.name} and I am ${this.age} years old.`);
  },
};

const sue = {
  name: "Sue",
  age: 21,
  speak: function() {
    console.log(`Hello, I'm ${this.name} and I am ${this.age} years old.`);
  },
};
```

Here we have two objects that are both representing people.  They each have `name:String` and `age:Number` properties and also a `speak()` method.

We intuitively can see the commonalities that these people objects share.  Ideally we would like to be able to write this once and reuse the functionality.

# Abstraction

We could abstract out the commonalities of the person objects and then use a function to create the objects for us.

```js
const createPerson = (name, age) => ({
  name,
  age,
  speak: function() {
    console.log(`Hello, I'm ${this.name} and I am ${this.age} years old.`);
  }
});

const bob = createPerson("Bob", 42);
const sue = createPerson("Sue", 21);
```

But this is a little offputting because we know that `this` is sometimes unreliable.