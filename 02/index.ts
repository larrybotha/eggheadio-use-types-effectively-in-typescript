let usernameWithType: string = 'Silver Surfer';
let usernameWithoutType = 'Iron Man';

// Typescript indicates that this needs to be a string by inferring the
// type from the variable assignment
usernameWithoutType = ['foo', 'bar'];

// function types can also be inferred
let userIdExplicit = (a: string, b: number): string => a + b;

let userIdInferred = (a: string, b: number) => a + b;

// 'string' is not assignable to number
let userIdTypeError = (a: string, b: number): number => a + b;

// contextual inference
let targetInferred = document.getElementById('target');
targetInferred.onclick = event => event.button;

let targetExplicit: HTMLElement = document.getElementById('target');
targetExplicit.onclick = (event: MouseEvent) => event.button;

let targetTypeError: HTMLElement = document.getElementById('target');
// expecting type 'Event' but signature defines an Element
targetTypeError.onclick = (event: HTMLButtonElement) => event.button;
