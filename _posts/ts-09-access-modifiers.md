---
title: "Ep.09: Access Modifiers in Typescript"
summary: "In this episode we'll see how to alter the member visibility in TS classes."
date: "2024-04-25"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: true
author: "Paras Chandra"
---

The visibility of class members can be set by access modifiers. There are three types of modifiers:
a. public
b. private
c. protected

Lets see what's different about these in TS than the other languages:

### `public`
The default visibility of class members is public and the public member can be accessed anywhere.
```typescript
class Greet {
    public greet() {
        console.log("hi!");
    }
}

const g = new Greet();
g.greet(); // Output: hi!
```
We don't even need to write public keyword on class members, because it is already a default modifier.

### `private`
The class members declared as private can only be accessed within the class, neither outside of the class nor even inside the subclasses.
```typescript
class Base {
    private x = 0;
}

const b = new Base();
console.log(b.x); 
// ERROR: Property 'x' is private and only accessible within class 'Base'.
```
In JS, we use `#` symbol before a member to make it private, but in TS we use only `private` keyword.

`private` also allows access using bracket notation during type checking. This makes private-declared fields potentially easier to access for things like unit tests, with the drawback that these fields are soft private and don’t strictly enforce privacy.
```typescript
class MySafe {
  private secretKey = 12345;
}
 
const s = new MySafe();
 
// Not allowed during type checking
console.log(s.secretKey);
//Property 'secretKey' is private and only accessible within class 'MySafe'.
 
// OK
console.log(s["secretKey"]);
```

### `protected`
The protected members are only visible within the class and the subclasses of the class they're declared in.
```typescript
class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}
 
class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // OK
g.getName();
// Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.
```

**Exposure of protected members**

Derived classes need to follow their base class contracts, but may choose to expose a subtype of base class with more capabilities. This includes making protected members public:
```typescript
class Base {
  protected m = 10;
}
class Derived extends Base {
  // No modifier, so default is 'public'
  m = 15;
}
const d = new Derived();
console.log(d.m); // OK
```
>Note: In the derived class, we need to be careful to repeat the protected modifier if this exposure isn’t intentional.

## A shorthand way developers use
Instead of using `this` and declaring members before constructor, many developers use this shorthand method:
```typescript
// Conventional way
class User {
    email: string
    name: string
    readonly city: string = "New Delhi"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

// Shorthand way
class Data {
    readonly id: string = "1gh48"
    constructor(
        public email: string,
        public name: string
    ) {

    }
}

const john = new User("john@xyz.com", "John Doe")
```