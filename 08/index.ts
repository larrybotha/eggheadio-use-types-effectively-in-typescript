interface SuperHero {
  powers: string[];
  savesTheDay: () => void;
}

let dazzler: SuperHero = {
  powers: ['transduces sonic vibrations into light'],
  savesTheDay() {
    console.log(`Dazzler ${this.powers} to save the day!`);
  },
};

interface BadGuy {
  badDeeds: string[];
  getRandomBadDeed: () => string;
  commitBadDeed: () => void;
}

let badGuy: BadGuy = {
  badDeeds: [
    'farts on old folks',
    "doesn't pick up his dog's poop",
    'steals from babies',
  ],
  getRandomBadDeed() {
    const badDeedIndex = Math.floor(Math.random() * this.badDeeds.length);

    return this.badDeeds[badDeedIndex];
  },
  commitBadDeed() {
    console.log(this.getRandomBadDeed());
  },
};

const saveDayOrBadDeed = (something: SuperHero | BadGuy) => {
  // 'powers' does not exist on BadGuy, so we get a compiler error here
  // Both types in the union type defined in this function's arguments are
  // evaluated - one of the types doesn't have the property, so a compiler error
  // is thrown
  // if (something.powers) {}

  // When a property is specific to a type, we can assert that the value we have
  // is that type:
  if ((something as SuperHero).powers) {
    (something as SuperHero).savesTheDay();
    // above is the new syntax - the original syntax used angle brackets, but
    // conflicted with JSX, so the new assertion was added
    // if ((<SuperHero>something).powers) {}
  } else {
    (something as BadGuy).commitBadDeed();
  }
};

console.log(saveDayOrBadDeed(dazzler));
