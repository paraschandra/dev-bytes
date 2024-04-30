---
title: "Ep.11: Abstract Class and Interfaces"
summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
date: "2024-04-27T05:35:07.322Z"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: true
author: "Paras Chandra"
---

The classes that are abstract can't be directly instantiated.

The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members. When a class doesn’t have any abstract members, it is said to be `concrete`.

The keyword `abstract` is used to declare a class as abstract class. Let's look at an example:
```ts
abstract class TakePhoto {
    constructor(
        public camera: string,
        public filter: string
    ) {}
}

const photo1 = new TakePhoto("front", "paris"); // ERROR
// Can't create an instance of an abstract class
```

To use this abstract class as a template, extend the subclass with abstract class:
```ts
abstract class TakePhoto {
    constructor(
        public camera: string,
        public filter: string
    ) {}
}

class Instagram extends TakePhoto {
    constructor(
        public camera: string,
        public filter: string,
        public alt: string
    ) {
        super(camera, filter)
    }
}

const photo = new Instagram("front", "paris", "selfie");
```

Beside this, we can also make methods and fields abstract.

An abstract method or abstract field is one that hasn’t had an implementation provided. These members must exist inside an abstract class, which cannot be directly instantiated.

Let's have a look:
```ts
abstract class Username {
    abstract getName(): void;
}

class User extends Username {
    constructor(
        public name: string;
    ) {}

    getName(): void {
        console.log("johndoe");
    }
}

const user1 = new User("John");
user1.getName(); // Output: johndoe
```

Now, you may be thinking that all these things can also be done using `interfaces`, then what's the use of abstract classes.

The key difference is that we can't define a feature or a method directly in the interfaces, but abstract classes allows us to do so and provide pre-built features to the subclasses.

An example for the same:
```ts
abstract class Username {
    constructor(
        public name: string
    ) {}

    getUserName(): string {
        return this.name + '123';
    }
}

class User extends Username {
    constructor(
        public name: string,
        public email: string
    ) {
        super(name)
    }
}

const user1 = new User("John", "john@xyz.com");
const username = user1.getUserName();
console.log(username); // Output: John123
```

That's all in this episode. `Sayonara`...