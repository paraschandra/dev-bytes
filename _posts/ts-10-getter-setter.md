---
title: "Ep.10: Accessors in Typescript"
summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
date: "2024-04-26"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: false
author: "Paras Chandra"
---

Classes can also have accessors to access the properties of a class.

These getters and setters are used to expose the members of a class of any kind of visibility. An example for the same can be seen below:
```typescript
class User {
    private _courseId: number = 248
    constructor(
        public email: string,
        public name: string
    ) {}

    get courseId(): number {
        return this._courseId;
    }

    // setters should not have any return type not even void
    set courseId(id: number) {
        if (id <= 1) {
            throw new Error("Course id should be greator than 1");
        }
        this._courseId = id;
    }
}

const john = new User("john.doe@xyz.au", "John Doe");
console.log(john.courseId()); // Output: 248
```

TypeScript has some special inference rules for accessors:
- If `get` exists but no `set`, the property is automatically `readonly`.
- If the type of the setter parameter is not specified, it is inferred from the return type of the getter.
- Getters and setters must have the same Member Visibility.

Since `TypeScript 4.3`, it is possible to have accessors with different types for getting and setting.