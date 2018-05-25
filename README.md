# Eggheadio - Use Types Effectively In Typescript

Annotations and learning from https://egghead.io/courses/up-and-running-with-typescript

- [01 - Intro to static typing](/01/index.ts)

    Takeaways:

    Typescript displays errors if types don't match definitions. Errors don't
    prevent compilation

- [02 - Using type inference](/02/index.ts)

    Takeaways:

    If a signature or type is not provided, the types are inferred. This applies
    to functions where return type is not defined, too.

- [03 - Union types and type aliases](/03/index.ts)

    Takeaways:

    Union types are disjunctions of types, as in Haskell.

    One must take care when using objects in union types - if a property in one
    literal is not found in another literal the compiler will throw an error.

