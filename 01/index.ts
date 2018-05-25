// assign 'someString' a type of 'string' and initialise it
let someString: string = 'cool';

// Typescript shows an error assigning a non-string here
someString = 12345;

let coolFunc = (a: string, b: number) => a + b;

// Typescript shows an error for this line because the arguments don't match
// the type signature
coolFunc(123, {});
