---
title: "Ep.03: Objects in TS"
summary: "This episode covers the vivid scenarios with objects in TS."
date: "2024-04-19"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: false
author: "Paras Chandra"
---

Here, we're not gonna talk about objects or object declaration. It's same as JS. But we're gonna see the usecases of object that is throught functions and will talk about object behaviour.

Lets first see how object is passed to and returned from a function:
```typescript
// Object passed as an argument
function createUser({name: string, email: string, isPaid: boolean}) {
    ...
}

createUser({name: "James", email: "james@xyz.com"}) // Error: one argument not passed

createUser({name: "John Doe", email: "john@xyz.com", isPaid: true})


// Object returned from a function
function createCourse() : {name: string, price: number} {
    return {name: "TypeScript Basics", price: 299}
}
```

## Weird behaviour of objects
The following code will throw error for extra arguments passing.
```typescript
function createUser({name: string, email: string}) {
    ...
}

//This will throw an error as 3rd parameter is not defined in the function
createUser({name: "John Doe", email: "john@xyz.com", isPaid: true}) // ERROR !!!
```
But this error will get removed if we pass the object like this...
```typescript
function createUser({name: string, email: string}) {
    ...
}

let newUser = {name: "John Doe", email: "john.xyz.com", isPaid: true}

createUser(newUser) // No Error.
```
The following behaviour isn't expected and TS should stop me to do so. But there a way in TS to pass optional arguments which we'll see later.