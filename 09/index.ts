const pushThing = (something, collection) => {
  const newCollection = collection.concat(something);

  console.log(newCollection);

  return newCollection;
};

const jeanGrey = {name: 'Jean Grey'};
const wolverine = {name: 'Wolverine'};

const superHeroes = [jeanGrey];
const powers = ['telekinesis', 'esp'];

// these are both valid in terms of the outcomes
pushThing(wolverine, superHeroes);
pushThing('adamantium claws', powers);

// these result in invalid outcomes because we're not evaluating whether what we
// are pushing onto the arrays are of the correct types
pushThing('cool', superHeroes);
pushThing('adamantium claws', []);

// using generics we can indicate that we expect some type, even if we don't
// know what that type is
// 'T' can be anything, but represents 'Type' as a convention
// With the generic we can now specify types for our function based on the
// generic
const pushThingGeneric = <T>(something: T, collection: T[]) => {
  const newCollection = collection.concat(something);

  console.log(newCollection);

  return newCollection;
};

pushThingGeneric(wolverine, superHeroes);
// we now get a compiler error here because 'cool' is a string, and superHeros
// is not an array of strings - a mismatch on the types of our parameters
pushThingGeneric('cool', superHeroes);

// We can go further and set the generic type when the function is called
pushThingGeneric<{name: string}>('cool', superHeroes);
pushThingGeneric<string>('adamantium claws', powers);

// Using an interface we can instead provide that as the generic type
interface SuperHero {
  name: string;
}

pushThingGeneric<SuperHero>('cool', superHeroes);
