---
title: "Ep.05: Readonly and Optional"
summary: "This episode is focused on the keyword 'readonly' and 'optional' fields."
date: "2024-04-21"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: false
author: "Paras Chandra"
---

`Readonly` is a keyword in typescript that makes any entity readonly or doesn't allow it to be manipulated.<br/>
To use it just write 'readonly' before the entity to make it readonly.
```typescript
type User = {
    readonly _id: string;
    name: string;
    email: string
};

let user1: User = {
    _id: "12f8",
    name: "John Doe",
    email: "john@xyz.com"
}

user1.email = "john.doe@abc.com";
user1._id = "42r3"; // ERROR: can't change readonly property
```

<br/>

`Optional (?)` allows us to make a property optional so that it don't throw an error if it's not available.<br/>
To make a property optional use "?" symbol after the name of the property and before the colon.
```typescript
type User = {
    _id: string;
    name: string;
    email: string;
    location?: string
};

let user2: User = {
    _id: "48t2",
    name: "Anthony",
    email: "anthony@xyz.com",
    // here location not passed but no error is thrown as it's optional.
}
```