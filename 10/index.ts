interface Crocodile {
  personality: string;
}
interface Taxes {
  year: number;
}

// this is a generic interface - it can contain any type
interface Container<T> {
  unit: T;
}

const croc: Container<Crocodile> = {unit: {personality: 'mean'}};
const tax: Container<Taxes> = {unit: {year: 2011}};

interface RedCroc extends Crocodile {
  color: 'red';
}
interface BlueCroc extends Crocodile {
  color: 'blue';
}
// this is an interface with a constraint - instead of allowing any type, only
// the specified types may be used
interface CrocContainer<T extends Crocodile> {
  crocUnit: T;
}

// we get autocompletion when creating these types, based on the type specified
// on the generic 'CrocContainer'
const redCroc: CrocContainer<RedCroc> = {
  crocUnit: {personality: 'irate', color: 'red'},
};
const blueCroc: CrocContainer<BlueCroc> = {
  crocUnit: {personality: 'cool', color: 'blue'},
};
// when there is an interface constraint, the type must be provided, otherwise
// we get a compiler error
const blueCrocErrored: CrocContainer = {
  crocUnit: {personality: 'cool', color: 'blue'},
};

// constraints work differently with classes compared to interfaces
class ClassyContainer<T extends Crocodile> {
  classCrocUnit: T;
}

// class constraints do not need to be provided when instantiating a constrained
// class
const classyCrocNoConstraint = new ClassyContainer();
// we get autocompletion based on the class, and we get compiler errors when
// adding properties that do not exist on the interfaces associated with the
// class
classyCrocNoConstraint.classCrocUnit = {personality: 'classy', teeth: 'asd'};

const classyRedCroc = new ClassyContainer<RedCroc>();
// we get autocompletion specific to the constraint provided to the class
classyRedCroc.classCrocUnit = {color: 'red', personality: 'angry'};

// we can create a class that instantates with the constructor
class CCC<T extends Crocodile> {
  constructor(public cccUnit: T) {}
}

// we can specify additional properties on this instance
const ccc = new CCC({personality: 'MEAN', likesCheetos: true});
// if we specify a constraint, we get a compiler error if a provided property
// doesn't exist on that constraint
const cccBlue = new CCC<BlueCroc>({personality: 'chilled', likesCheetos: true});
