---
title: "Ep.14: Generic Classes and Constraints"
summary: "Now lets discuss about the generic classes in this episode."
date: "2024-07-10"
coverImage: "/assets/blog/typescript/typescript.png"
tags: ["typescript", "ts notes", "notes"]
featured: false
author: "Paras Chandra"
---

## Generic Classes
Just like the generic interfaces that we've discussed in the last episode, generic classes have a similar shape or definition style as:

```ts
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

The above example shows us pretty general use of generic class working on type `number` but not restricted to it only. We can use any type like `string` or more complex objects instead of type `number`.

Just like with interfae, putting the type parameter on the class lets us make sure that all the properties of the class are working with the same type.

### Real world usecases:
Lets discuss a real world usecase of generic classes by creating a class that can work on two different types of sellables...

```ts
interface Course{
    name: string;
    author: string;
    subject: string;
}

interface Quiz{
    name: string;
    type: string;
}

// This generic class helps to handle the common usecase of adding a product to the cart
// Product can be of type 'Course' or 'Quiz i.e., generic type <T>
class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}
```

## Generic Constraints
While working with generic types, the compiler couldn't prove that every type has certain properties which we're trying to access from that type and so it warns us that we can't make this assumption as:

```ts
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
// Property 'length' does not exist on type 'Type'.
  return arg;
}
```

In order to prevent this, we must list our requirements as a constraint on what `Type` can be.

This can be achieved as follows:
```ts
interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
```

### Type parameters in generic constraints:
You can declare a type parameter that is constrained by another type parameter.

For example, we can place a constraint on a generic type parameter to be of some specific type:
```ts
interface Database{
    connection: string;
    username: string;
    password: string;
}

function genericFunction<T, U extends Database>(val1: T, val2: U): object{
    return {
        val1, val2
    }
}

genericFunction(3, {'conn', 'john', '123456'})
```

That's all for this episode. Sayonara...