# Inheritance

Now let's create the `Poodle` -> `Dog` -> `Mammal` inheritance.  This means that every instance of `Poodle` is also an instance of a `Dog`, which is an instance of a `Mammal`.

We first need to start at the top of the chain.

```js
class Mammal {
  scientificClass = "Mammalia";
  warmBlooded = true;
  vertebrate = true;

  constructor(trinomialName) {
    this.trinomialName = trinomialName;
  }
}
```

Now we can create a `Dog`, which inherits from the `Mammal` class using the `extends` keyword.

```js
class Dog extends Mammal {
  constructor(breed, age) {
    this.breed = breed;
    this.age = age;
  }

  sound = () => "Woof";
}
```

This doesn't quite work.  If we try to create a `new Dog(3)` we get the following error:
```text
Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

Remember when we created the `Mammal` class the constructor stated you must specify a `trinomialName` as a parameter.  The `Dog` constructor must call the `Mammal` constructor!

```js
class Dog extends Mammal {
  constructor(breed, age) {
    super("Canis lupus familiaris");
    this.breed = breed;
    this.age = age;
  }

  sound = () => "Woof";
}
```

We use the `super` keyword in a class to refer to the **parent** class.  While the `this` keyword refers to the current instance.

Now we can create the `Poodle` class.

```js
class Poodle extends Dog {
  constructor(name, age) {
    super("Standard Poodle", age);
    this.name = name;
  }

  speak = () => console.log(`${this.name}, a ${this.age} year old ${this.breed}, says, "${this.sound()}!"`);
}
```

Let's create a `Poodle`.

```js
const max = new Poodle("Max", 2);
max instanceof Poodle; // true
max instanceof Dog;    // true
max instanceof Mammal; // true
max speak();           // Max, a 2 year old Standard Poodle, says, "Woof!"
max.sound();           // Woof
max.trinomialName;     // Canis lupus familiaris
```

Now we get access to inherited members and we didn't have to keep rewriting the same code over and over!
 