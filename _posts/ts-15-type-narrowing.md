---
title: "Ep.15: Type Narrowing"
summary: "In this episode we'll discuss about type narrowing in TS."
date: "2024-09-12"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: false
author: "Paras Chandra"
---

Types in JavaScript are defined in broader perspective such as `null` in JS is of type `object` and `array` is also an `object`. So, while working in TypeScript we can encounter a situation where we've to check for the type of variables or parameters for performing our operations and that's where we can run into a trouble if we don't narrow down the variable from a broader type to a specific type.

`Type narrowing` in TypeScript is a technique that lets you write code that operates more precisely with different types by refining the type of a variable in a conditional block. Essentially, it allows TypeScript to "narrow down" a variable from a broader type to a more specific type based on the logic in your code.

Here's how type narrowing typically works:

- **Using `typeof` for Primitive Types:** aka `type gaurd`.
```ts
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase()); // id is narrowed to string
    } else {
        console.log(id.toFixed(2)); // id is narrowed to number
    }
}
```

- **Using `instanceof` for Classes:**
```ts
class Dog {
    bark() { console.log("Woof!"); }
}

class Cat {
    meow() { console.log("Meow!"); }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark(); // animal is narrowed to Dog
    } else {
        animal.meow(); // animal is narrowed to Cat
    }
}
```

- **Using `in` for Checking Properties:**
```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim(); // animal is narrowed to Fish
    } else {
        animal.fly(); // animal is narrowed to Bird
    }
}
```

- **Type Predicates:** Custom functions can also help narrow types by returning a type predicate.
```ts
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function moveAgain(animal: Fish | Bird) {
    if (isFish(animal)) {
        animal.swim(); // animal is narrowed to Fish
    } else {
        animal.fly(); // animal is narrowed to Bird
    }
}
```
>Type narrowing is helpful because it increases type safety and reduces runtime errors by allowing TypeScript to check that the correct methods or properties are used based on the refined types.