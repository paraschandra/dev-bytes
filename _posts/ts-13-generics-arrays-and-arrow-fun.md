---
title: "Ep.13: Generics, Arrays & Arrow Functions"
summary: "Moving forward lets see how arrays and arrow functions utilizes generics."
date: "2024-07-09"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: false
author: "Paras Chandra"
---

There's nothing special about the implementation of generics in arrays and arrow function but the syntax can be sometimes tricky and enough to confuse new comers.

Let's dive into it...

The following function is a simple implementation of array type generics where the return type is also an array.
```ts
function getSearchedProduct<Type>(products: Type[]): Type[] {
    // for return type array
    return products;
}
```

But there can be scenarios where only a single entity is needed to be returned. That can be achieved as:
```ts
// here generics are not fully utilized
function getSearchedProduct<Type>(products: Type[]): number {
    return 3;
}
```

So, professionals do the same like this:
```ts
function getSearchedProducts<Type>(products: Type[]): Type {
    // here an element of the array can only be returned
    // as the return type is 'Type'
    return products[3];
}
```

### Arrow function implementation
Let's see how the above function can be implemented as arrow function...
```ts
const getSearchedProducts = <Type>(products: Type[]): Type => {
    const idx = 3
    return products[idx];
}
```

>**Note:** While using generics in JSX, developers put a comma like <Type,> to distinguish between a generic and JSX element.

That's all in this episode. *Sayonara...*