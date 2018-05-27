interface Opponent {
  alias: string;
  health: number;
}

// a class in TypeScript is just a function which accepts params - the same as
// in JS - it's a constructor called with 'new'
class ComicBookCharacter {
  // All class properties are public by default
  // An implicit 'public' exists by default
  // alias: string;
  // health: number;
  // strength: number;
  // secretIdentity: string;

  // we can be more explicit, and also hide properties form public access using
  // the 'private' keyword.
  // If these properties are configured in the constructor method's params we
  // will get a compiler error. Either set them here, or there
  // public alias: string;
  // public health: number;
  // public strength: number;
  // private secretIdentity: string;
  private team: {
    name: string;
    members: ComicBookCharacter[];
  };

  // constructor is called when class is initialised
  constructor(
    // properties will need to be manually set when the constructor is defined
    // like so:
    // alias: string,
    // health: number,
    // strength: number,
    // secretIdentity: string

    // We can do better - TypeScript allows one to define whether a parameter is
    // public or private in the constructor method which then automatically
    // assigns the value to the corresponding property
    // This instructs the class that the parameters are properties of the class
    public alias: string,
    // If we didn't define public/private then we'd get a compiler error inside
    // the class should we attempt to access the property:
    // alias: string,
    public health: number,
    public strength: number,
    private secretIdentity: string
  ) {
    // we can manually set the properties if they are not being configured in
    // the constructor
    // this.alias = alias;
    // this.health = health;
    // this.strength = strength;
    // this.secretIdentity = secretIdentity;
  }

  // create a public method allowing us to get the private secret identity
  getSecretIdentity() {
    return this.secretIdentity;
  }

  // we can set opponent's type to an interface defined above
  attackFunc(opponent: Opponent, attackWith: number) {
    opponent.health -= attackWith;

    console.log(
      `${this.alias} attacked ${opponent.alias} who's health = ${
        opponent.health
      }`
    );

    return opponent.health;
  }

  getTeam() {
    return this.team;
  }

  // static methods are associated with the class, not the instance, and thus
  // only accessible on the class
  // static methods can update private instance members
  static createAndAssignTeam(teamName: string, members: ComicBookCharacter[]) {
    const team = {
      name: teamName,
      members,
    };

    members.map(member => (member.team = team));
  }
}

// initialising properties after creating the instance
// const storm = new ComicBookCharacter();
// storm.alias = 'Storm';
// storm.health = 100;
// storm.strength = 100;
// with secretIdentity configured to be private it can only be set from within
// the class. We get an error from the compiler here
// storm.secretIdentity = 'Ororo Munroe';

// const theBlob = new ComicBookCharacter();
// theBlob.alias = 'The Blob';
// theBlob.health = 1000;
// theBlob.strength = 5000;
// theBlob.secretIdentity = 'Fred J Dukes';

// Because we now have a constructor that accepts initialisation values we need
// to pass values through when initialised
const storm = new ComicBookCharacter('Storm', 100, 100, 'Ororo Munroe');
const theBlob = new ComicBookCharacter('The Blog', 1000, 5000, 'Fred J Dukes');

storm.attackFunc(theBlob, storm.strength);

// check that we can acccess the secret identity
console.log(storm.getSecretIdentity());

// this results in a compiler error - teamName is a static method available only
// on the class, not any of its instances
// storm.teamName();

const team = ComicBookCharacter.createAndAssignTeam('oddCouple', [
  storm,
  theBlob,
]);

console.log(storm.getTeam());
