// union type
let thing: string | number | string[] | boolean;

type thingType = string | number | string[] | boolean;

const returnSomethingVerbose = (
  something: string | number | string[] | boolean
) => something;

const returnSomethingWithAlias = (something: thingType) => {
  if (
    typeof something === 'string' ||
    typeof something === 'number' ||
    typeof something === 'boolean'
  ) {
    console.log(`something: ${something}`);
  } else if (something instanceof Array) {
    console.log(something.join(' '));
  } else {
    console.log(`something: ${something}`);
  }
};

returnSomethingWithAlias(['an', 'array', 'of', 'strings']);

// Wathc out for union types with objects and non-objects
type stuff = string | {name: string};

const gimmeStuffTypeError = (stuff: stuff) => {
  typeof stuff === 'string';
  // property 'name' does not exist on type 'stuff'
  // Typescript is attempting to find a common type in the type definition, but
  // name exists only on the record
  typeof stuff.name === 'string';
};

// Watch out for union-typing object literals that don't share common properties:
type coolThings = {name: string} | {id: number};

const gimmeCoolThings = (thing: coolThings) => {
  // we should never get a string, so we get an error that 'name' doesn't exist on
  // type never
  if (typeof thing === 'string') return thing.name;

  // for both of these statements we get property 'name|id' does not exist
  // on type coolThings because the compiler can't find a common property
  if (typeof thing.name === 'string') return thing.name;
  if (typeof thing.id === 'number') return thing.id;
};

// referencing common properties in a union type of object literals
type stuffAndThings =
  | {cool: string; meh: string}
  | {cool: string; lame: string};

const gimmeStuffAndThings = (stuff: stuffAndThings) => {
  // the cool property doesn't cause any problems here because it is commong to both
  // literals. 'lame' is specific to only one of the literals, so the compiler
  // throws an error
  return stuff.cool || stuff.lame;
};
