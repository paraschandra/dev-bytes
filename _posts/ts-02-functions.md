---
title: "Ep.02: Functions in TS"
summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
date: "2024-04-18"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: false
author: "Paras Chandra"
---

The type checking in functions needs to be done on both the parameters accepted and the return value.

## For parameters' type -

`TypeScript`
```typescript
function signUp(name: string, email: string, id: number, isNew: boolean = false) {
    id.toUpperCase(); // Type Error
    isNew = "yes"; // Type Error

    console.log(`Name: ${name}, email: ${email}`);
}

signUp("John Doe", "john.doe@xyz.com", 3472);
```
`JavaScript`
```javascript
function signUp(name, email, id, isNew) {
    if (isNew === void 0) { isNew = false }; // extra code generated
    ...
}

signUp("John Doe", "john.doe@xyz.com", 3472);
```

## For return type -
This is the scenario where only one type of value is returned.
```typescript
function checkVal(val: number): boolean {
    if (val > 5) return true;
    return false;
}

res = checkVal(10);
console.log(res);
```
There can be some scenarios (like one below) where more than one type of value is returned, which we'll see later.
```typescript
function checkVal(val: number) {
    if (val > 10) return false;
    return "Status: OK";
}
```

## For returning nothing - 
For functions that don't return anything have return type `void`.
```typescript
function print(): void {
    console.log("Hello! World");
}

print();
```

## The story of 'never' -
Some functions never return a value:
```typescript
function fail(msg: string): never {
  throw new Error(msg);
}
```
The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

`never` also appears when TypeScript determines there’s nothing left in a union.