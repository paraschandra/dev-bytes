---
title: "Ep.06: Union Types in TS"
summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
date: "2024-04-22"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: false
author: "Paras Chandra"
---

A union type in typescript is a combination of two or more types, representing values that can be any one of those types.<br/>
Each of these types are referred as the union's member.

Here's an example of union type:
```typescript
// here id can be of type number or string
let id: number | string = 24768;

score = "1f25g";

score = 30045;
```

Another example of combining two custom types:
```typescript
type User = {
    id: number;
    name: string;
}

type Admin = {
    id: number;
    username: string;
}

let john: User | Admin = {name: "John", id: 2468};

john = {username: "johnDoe", id: 2468}; // No error
```

Now, lets see an interesting usecase of union in arrays:
```typescript
// an array with elements of only number type allowed
const data1: number[] = [1, 2, 3]; 
// an array with elements of only string type allowed
const data2: string[] = ["1", "2", "3"];

// Now, lets create a heterogeneous type array.
// This is the mistake commonly made - 
const data3: string[] | number[] = [1, "2", 3]; 
// ERROR: only elements of type either only number or only string are allowed

// So, to make a heterogeneous type array, do this:
const data4: (string | number)[] = ["1", 2, "3"];
```
<br/>

Typescript allows us to make a value of very strict type.

Such as, if we want the value of PI to be precisely equals to 3.14, then we can do it like this:
```typescript
// this is a literal type of assignment
let pi: 3.14 = 3.14;

pi = 3.145; // ERROR
```
Another useful scenario:
```typescript
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";

seatAllotment = "crew"; // ERROR: not allowed
```