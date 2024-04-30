---
title: "Ep.07: Tuples in Typescript"
summary: "Tuples are present in multiple languages. In this episode let's see the use of tuples in TS."
date: "2024-04-23"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: false
author: "Paras Chandra"
---

Tuples in typescript allows to declare a special type of array where each element can be assigned a specific type and in order.<br/>
It means that the order in which the types of each element is declared will be maintained strictly while assigning values.

Let's take a look at the example:
```typescript
let user: [number, string, boolean];

user = [12, "John", true]; // order of type is maintained

user = ["12", "John", 14]; // ERROR: type mismatch
```

A general usecase of tuples is setting up a protocol or restriction on values.<br/>

But TS sometimes shows a weired behaviour. Let's explore it:
```typescript
type User = [number, string];

const newUser1: User = [126, "John Doe"];

const newUser2: User = [129, "Sam Wilson", true]; // ERROR: not allowed (Tuple type)

// But if we push an element into the tuple type array
newUser1.push(true); // No error thrown
```
This is why use tuple in TS keeping in mind this behaviour and not relying much on it.