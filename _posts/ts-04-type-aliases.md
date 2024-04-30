---
title: "Ep.04: Type Aliases on Rescue"
summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
date: "2024-04-20"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: false
author: "Paras Chandra"
---

We've been using object types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

A type alias is exactly that - a name for any type. The syntax for a type alias is:
```typescript
type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point): void {
    console.log("x-coordinate: " + pt.x);
    console.log("y-coordinate: " + pt.y);
}

printCoord({x: 100, y: 150});
```
You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type:
```typescript
type ID = number | string;
```
> Note that aliases are only aliases - you cannot use type aliases to create different/distinct “versions” of the same type. When you use the alias, it’s exactly as if you had written the aliased type.

In other words, this code might look illegal, but is OK according to TypeScript because both types are aliases for the same type.

## Type mixing
With type we get the flexibility to use types already created by other developers and combine them to make our own type for a different usecase scenario.
This can be achieved as follows:
```typescript
type cardNumber = {
    cardNumber: number;
}

type cardDate = {
    cardDate: string;
}

// using '&' symbol to combine the already created types
type cardDetails = cardNumber & cardDate & {
    cvv: number;
}
```
>Note: The above example is just for illustration. Don't use it like this in real projects.