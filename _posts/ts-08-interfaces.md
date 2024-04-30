---
title: "Ep.08: Interfaces in Typescript"
summary: "Another interesting way of naming an object. This episode covers interfaces in depth."
date: "2024-04-24"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: true
author: "Paras Chandra"
---

Interface is an another way to name an object type just like we did with type aliases but with a slight difference which we'll see later.
Basically, an interface provides an interface for the object.

Interfaces are most commonly used in Typescript. The example usecase of it is:
```typescript
interface User {
    readonly _Id: number;
    email: string;
    googleId?: string;
    // function templates
    startTrial: () => string;
    // OR
    endTrial(): string;
    redeem(couponCode: string, value: number): number;
}

const john: User = {
    _Id: 284, 
    email: "john@xyz.au",
    startTrial: () => {
        return "Trial started.";
    },
    endTrial: () => {
        return "Trial ended.";
    },
    redeem: (code: "sam10", off: 10) => {
        return 10;
    }
}
```

## Interfaces Vs Type Aliases

**1. Interfaces have inheritance**<br/>
If we want to inherit the types of an available interface we can do that by using `extends` keyword. Similarly, we can extend a type aliases via intersections.
```typescript
// Extending an interface via inheritance
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;

// Extending a type via intersections
type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
```

**2. Reopening in interfaces**<br/>
We can add new fields to an existing interface by reopening it but we can't do it in type aliases.
```typescript
// Adding new fields in interface
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

// But can't add it to a type
type Window = {
  title: string;
}

type Window = {
  ts: TypeScriptAPI;
}
// Error: Duplicate identifier 'Window'.
```

Beside these differences, almost all features of an `interface` are available in `type`.