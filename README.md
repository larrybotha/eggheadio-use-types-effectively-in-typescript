# Eggheadio - Use Types Effectively In Typescript

Annotations and learning from https://egghead.io/courses/up-and-running-with-typescript

1. [Intro to static typing](/01/index.ts)

    Takeaways:

    Typescript displays errors if types don't match definitions. Errors don't
    prevent compilation

2. [Using type inference](/02/index.ts)

    Takeaways:

    If a signature or type is not provided, the types are inferred. This applies
    to functions where return type is not defined, too.

3. [Union types and type aliases](/03/index.ts)

    Takeaways:

    Union types are disjunctions of types, as in Haskell.

    One must take care when using objects in union types - if a property in one
    literal is not found in another literal the compiler will throw an error.

4. [Distinguishing between types of strings](/04/index.ts)

    Takeaways:

    String variable types allow any string to be assigned to a variable.

    String literal types allow only values soecified in the type union to be
    assigned to a variable or parameter;

5. [Using interfaces to describe types](/05/index.ts)

    Takeaways:

    Interfaces abstract types, can have optional properties, and can extend
    other interfaces.

6. [Creating a class](/06/index.ts)

    Takeaways:

    TypeScript allows one to define class properties via the constructor by
    defining parameters as either `public` or `private`. Params that are neither
    `public` or `private` are not made into class properties.

    Non-static proeprties are simply added to the prototype on the class (check
    compiled code using `$ tsc 06/index.js` to compile). Static methods and
    properties are defined directly on the class.

7. [Sharing class behaviour with inheritance](/07/index.ts)

    Takeaways:

    If a derived class has a `constructor` method, then it will be called.
    Accessing `this` inside the `constructor` can only be done once `super` is
    called - calling the super class' constructor.

    If a derived class does not have a `constructor`, then the `constructor` in
    the parent class will be called.

    `protected` properties work in a similar way to `private` properties, except
    that they can be accessed within derived classes. `private` properties are
    only accessible within the class in which they are defined.
8. [Using assertion to convert types](/08/index.ts)

    Takeaways:

    Type assertions are compile-time only in TypeScript - once compiled, the
    assertions are gone.

    Type assertions in TypeScript have the form:

    ```typescript
    object as MyType

    // e.g.
    if ((myObject as TypeOne).property) { ... }
    ```

    Assertions were previously defined using angled brackets, with the newer
    `as` syntax added after the angled-bracket syntax conflicted with JSX:

    ```typescript
    (<MyType>myObject).property
    ```
9. [Basic of generics](/09/index.ts)

    Takeaways:

    Generics allow us to write reusable code where the type is set at the
    location the function is called.
