class ComicBookCharacter {
  constructor(
    public alias: string,
    public health: number,
    public strength: number,
    // make this property available in both this class and derived classes
    protected secretIdentity: string
  ) {}
}

class SuperHero extends ComicBookCharacter {
  traits = ['empathy', 'strong moral code'];

  // If we don't define a constructor, the constructor in the super class is
  // called

  // without running 'super' and passing in props to the parent component we
  // don't get access to the private properties of the super class
  // This method could be moved to the super class, but then all classes
  // extending that class will get the method, and we may only want the method
  // on SuperHero and not SuperVillain
  // Another alternative is to make the property protected instead of private.
  // Protected properties are available only in the class and derived classes -
  // not publicly
  getSecretId() {
    this.secretIdentity;
  }
}
class SuperVillain extends ComicBookCharacter {
  flaws = ['hubris', 'always explains evil plan'];

  // If we define a constructor in a derived class, this is the constructor that
  // is called.
  // without calling 'super' we get a compiler error
  constructor(a, b, c, d) {
    // without providing arguments, the compiler indicates that we're missing
    // arguments
    super(a, b, c, d);
    // 'this' can only be used _after_ calling 'super' in the constructor,
    // otherwise we get a compiler error
    console.log(`${this.alias} eats kittens`);
  }
}

let jubilee = new SuperHero('Jubilee', 23, 233, 'Jubilation Lee');
let scarletWitch = new SuperVillain(
  'Scarlet Witch',
  233,
  4444,
  'Wanda Maximoff'
);

console.log(jubilee);
console.log(scarletWitch);
