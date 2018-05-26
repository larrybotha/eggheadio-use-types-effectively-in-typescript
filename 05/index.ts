// superHero and superVillain share similar properties but differ in the name of
// their name properties with the same type.
let superHero1: {secretIdentity: string; superHeroName: string; health: number};
let superVillain1: {
  secretIdentity: string;
  superVillainName: string;
  health: number;
};

// we can use the same property for both types, but there's a lot of room for
// typos to be introduced now
let superHero2: {secretIdentity: string; alias: string; health: number};
let superVillain2: {secretIdentity: string; alias: string; health: number};

interface AttackFunction {
  (opponent: {alias: string; health: number}, attackWith: number): number;
}

interface OptionalAttributes {
  strength?: number;
  insanity?: number;
}

// instead, we can use an interface to abstract the common annotations
interface ComicBookCharacter extends OptionalAttributes {
  // make this an optional property
  secretIdentity?: string;
  alias: string;
  health: number;
  attack: AttackFunction;
  // we could add strength and insanity here as optional properties, but the
  // interface could become bloated. Instead, we extend this interface with an
  // interface of optional properties
}

interface KrustyTheClown {
  alias: string;
  health: number;
  inebrationLevel: number;
  attack: AttackFunction;
}

const attackFunc = (opponent, attackWith) => {
  opponent.health -= attackWith;
  console.log(
    `${this.alias} attacked ${opponent.alias}, who's health = ${
      opponent.health
    }`
  );

  return opponent.health;
};

// assign superHero with the type of ComicBookCharacter
let superHero: ComicBookCharacter = {
  // this is a TypeError
  // alias: true,
  alias: 'She-Hulk',
  health: 5000,
  // this property exists on the hero, but not the villain
  strength: 5000,
  attack: attackFunc,
};

let superVillain: ComicBookCharacter = {
  // another Type Error
  // scretIdentity: 'Jack Napier',
  secretIdentity: 'Jack Napier',
  alias: 'Joker',
  health: 25,
  // this property exists on the villain, but not the hero
  insanity: 145,
  attack: attackFunc,
};

const getSecretIdentity = (character: ComicBookCharacter) => {
  if (character.secretIdentity) {
    console.log(`${character.alias} is ${character.secretIdentity}`);
  } else {
    console.log(`${character.alias} has no secret identity`);
  }
};

getSecretIdentity(superHero);

superHero.attack(superVillain, superHero.strength);
