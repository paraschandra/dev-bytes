---
title: "Ep.12: Generics in Typescript"
summary: "In this episode we'll deep dive into the world of generics and see what they're actually."
date: "2024-04-30"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: false
author: "Paras Chandra"
---

In software engineering, reusability of components is very crucial. And in order to create reusable components, languages provide a tool known as `generics`, that is, being able to create a component that can work over a variety of types rather than a single one.

## The World of Generics

Keeping the generics aside for a moment, let's first discover the necessity of the generics.

Until now, if we're defining a function, either we're giving a specific type to the return value and parameters or using the type `any` which is not recommended:

```ts
function idenitty(arg: number): number {
    return arg;
}

// OR

function identity(arg: any): any {
    return arg;
}
```

But the problem with the use of `any` is that the function then can accept the values of one type and can return the values of any other type opening the gates for future clashes.

So, to avoid these scenarios we need to lock the parameters and return value types. And here comes into play the `generics`.

### Diving In...

To build the generic version of a function we need to follow this weird syntax and we'll be using a *type* variable, a special kind of variable that works on types rather than values.

```ts
function identity<Type>(arg: Type): Type {
    return arg;
}
```
This Type allows us to capture the type the user provides (e.g. number), so that we can use that information later.

We can also explicitly set `Type` to be string, or number, or any type like this:
```ts
let output = identity<string>("myString");
```

Or, we can use *type argument inference* - that is, we want the compiler to set the value of `Type` for us automatically based on the type of the argument passed.
```ts
let output = identity("myString");
```

**Here's what we can also do:**
- We can change the name of the `Type` variable to anything we want.
- We can also use interfaces like this:
```ts
interface Bottle {
    brand: string;
    color: string;
}

function identity<Bottle>(...) {...}
```

That's all in this episode. Meet you in another one.

`Sayonara...`