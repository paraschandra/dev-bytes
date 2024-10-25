---
title: "Ep.16: Discriminated Union and Exhaustiveness Checking with never"
summary: "This episode talks about extended methods for type narrowing in TS."
date: "2024-09-30"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: false
author: "Paras Chandra"
---

Up til now we've only focused around narrowing single variables with simple types like `string`, `boolean`, and `number`.
While this is common, most of the time in JavaScript we’ll be dealing with slightly more complex structures.

Lets take an example of an interface dealing with the shapes and their dimensions:
```ts
interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}
```
The problem with this is the dimensions are optional and there's always a possibility that these remain undefined which will cause error...
```ts
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
    // 'shape.radius' is possibly 'undefined'.
  }
}
```

This can be solved by properly separating `Shape` out into two types with different values of `kind` and properties declared as required this is what Discriminated union do.

A **Discriminated Union** in TypeScript is a union of types with a common literal field, known as a "discriminant" or "tag." This field is usually a string or number literal unique to each member of the union, allowing TypeScript to narrow down the type based on that field.
```ts
interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
type Shape = Circle | Square;
```

Now, instead of checking for `kind` property again and again, the same checking can be done with switch cases...
```ts
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.sideLength ** 2;
  }
}
```

### Exhaustiveness Checking with `never`:
When you use a switch statement or other type-checking structures, TypeScript will verify that all possible cases of the discriminated union are handled. The never type is used to confirm that a condition will never occur; if all cases are not covered, TypeScript raises an error in the default case.

```ts
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number }
  | { kind: 'rectangle'; width: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
    case 'rectangle':
      return shape.width * shape.height;
    default:
      // TypeScript knows `shape` should never reach here
      const _exhaustive: never = shape;
      return _exhaustive; // This will raise an error if we add a new type to `Shape` but don't handle it here
  }
}
```
>This technique ensures that the function is exhaustive and future-proof against additions to the union type.

That's all in this series of `TypeScript`. Will see you in another one.

Sayonara...