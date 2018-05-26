// annotating a string variable type
let unit: string;

// annotating a string literal type
// A string literal type can only be set to null, undefined, or the type value
let milesTypeError: 'MILES' = 'hey';

type distanceMetric = 'MILES' | 'KILOMETERS' | 'METERS' | 'YARDS' | 'FEET' | 'INCHES';

const moveCharacter = (distance: number, value: distanceMetric) => {
  console.log(`You moved ${distance} ${value}`)
}

// Type error thrown here - dragon is not one of distanceMetric
moveCharacter(3, 'dragon')
