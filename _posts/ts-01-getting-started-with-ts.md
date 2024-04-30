---
title: "Ep.01: Getting Started with TS"
summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
date: "2024-04-17"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: false
author: "Paras Chandra"
---

## What typescript does?
The only job Typescript does is `Static checking`. It analyzes the code as we write for error.<br/>
It provides many functionalities on the top of JS functionalities. It's a development tool. You can say it's a wrapper around JS.<br/>
Finally, typescript transpiles the code to JS.

> <b>Static Checking:</b> Analyzing the code while writing and giving hints of error rather than throwing errors on execution.

## Hello! TypeScript
```typescript
let greetings: string = "Hello! World";

greetings = 6 //This will throw error

console.log(greetings); // Hello! World
```

## The Primitives: String, Number, and Boolean
```typescript
let str: string = "I'm a string.";
str = 123; // ERROR

let id: number = 1236;
id = fa23; // ERROR

let flag: boolean = false;
flag = "Hi!"; // ERROR
```
> Typescript is smart enough to detect the type of variables on assignment. So, there's no need to write type for every variable. There's a special usecase for it.

## A Red Flag - <i>Any</i>
TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.<br/>
Any isn't a type in TS, but is a marker in typescript to turn off type checking for a particular value wherever it's used.

`noImplicitAny`

When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.

You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.